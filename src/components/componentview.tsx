import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Button, ButtonRound, Icon, Text } from './index'
import { TextField, TextArea } from 'react-aria-components'
import '../style.css'
import DOMPurify from 'dompurify'
import axios from 'axios'

type ComponentViewProps = {
  id?: string
}

const ComponentView = (props: ComponentViewProps) => {
  const [bgDark, setBgDark] = useState(false)
  const [sizeLarge, setSizeLarge] = useState(false)
  const [tab, setTab] = useState('html')
  const [curTabText, setCurTabText] = useState('')
  const [htmlDisplay, setHtmlDisplay] = useState(<div></div>)
  let parser = new DOMParser()

  const [htmlText, setHtmlText] = useState('')
  const [cssText, setCssText] = useState('')
  const [jsText, setJsText] = useState('')

  const [data, setData] = useState('')
  const [errors, setErrors] = useState('')

  const handleBg = (light: boolean) => {
    if (light) {
      setBgDark(false)
    } else {
      setBgDark(true)
    }
  }

  const handleSize = () => {
    if (sizeLarge) {
      setSizeLarge(false)
    } else {
      setSizeLarge(true)
    }
  }

  const changeTab = (newTab: string) => {
    setTab(newTab)
    if (newTab === 'html') {
      setCurTabText(htmlText)
    } else if (newTab === 'css') {
      setCurTabText(cssText)
    } else {
      setCurTabText(jsText)
    }
  }

  function SafeHTMLDisplay(newHtml: string) {
    const sanitizedHTML = DOMPurify.sanitize(newHtml, { KEEP_CONTENT: true })
    console.log(sanitizedHTML)
    return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
  }

  const updateText = (text: string) => {
    if (tab === 'html') {
      setHtmlText(text)
    } else if (tab === 'css') {
      setCssText(text)
    } else {
      setJsText(text)
    }
    setCurTabText(text)
    setHtmlDisplay(SafeHTMLDisplay(text))
  }

  useEffect(() => {
    let processing = true
    const axiosFetchData = async processing => {
      await axios
        .get(`http://localhost:4001/Bouquet/${props.id}`, {
          withCredentials: true, // Required if using credentials
        })
        .then(res => {
          console.log(res)
          if (processing) {
            setHtmlText(res.data.html)
            setCssText(res.data.css)
            setJsText(res.data.js)
            updateText(res.data.html)
          }
        })
        .catch(err => console.log(err))
    }
    axiosFetchData(processing)
  }, [])

  const axiosPostData = async () => {
    const postData = {
      name: '',
      html: htmlText,
      css: cssText,
      js: jsText,
    }

    await axios
      .post('http://localhost:4001/post', postData)
      .then(res => setErrors(res.data))
      .catch(err => setErrors(err.message))
  }

  const isScreenSmall = useMediaQuery({ maxWidth: '1150px' })
  return (
    <>
      <Text font="display" size="lg">
        Create a new component!
      </Text>
      <div className="content col-100">
        <div className={`component-view ${bgDark ? 'comp-view-dark' : 'comp-view-light'}`}>
          {htmlDisplay}
          <div className="button-row">
            <ButtonRound className={`bg-white ${bgDark ? '' : 'selected'}`} size="md" onPress={() => handleBg(true)}></ButtonRound>
            <ButtonRound className={`bg-dark ${bgDark ? 'selected' : ''}`} size="md" onPress={() => handleBg(false)}></ButtonRound>
          </div>
        </div>
        <div className={`content wide-flex-col padding-none ${isScreenSmall ? 'col-100' : 'col-40'}`}>
          <div className={`component-view component-code border-button-top`}>
            <Button className={`toggle-btn border-radius-none${tab === 'html' ? ' selected' : ''}`} onPress={() => changeTab('html')}>
              <Text font="display" weight="bold" size="xs">
                HTML
              </Text>
            </Button>
            <Button className={`toggle-btn border-radius-none${tab === 'css' ? ' selected' : ''}`} onPress={() => changeTab('css')}>
              <Text font="display" weight="bold" size="xs">
                CSS
              </Text>
            </Button>
            <Button
              className={`toggle-btn border-radius-none${tab === 'js' ? ' selected' : ''}`}
              onPress={() => {
                changeTab('js')
              }}
            >
              <Text font="display" weight="bold" size="xs">
                JS
              </Text>
            </Button>
          </div>
          <div className={`component-view component-code`}>
            <TextField className="component-code">
              <TextArea value={curTabText} onChange={e => updateText(e.target.value)} />
            </TextField>
            <div className="button-row align-right">
              <Button className="border-radius-50 button-blank">
                <Icon svg="copy" color="colors-neutral-lightblack" size="lg"></Icon>
              </Button>
              <Button className="border-radius-50 button-blank">
                <Icon svg="paste" color="colors-neutral-lightblack" size="lg"></Icon>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Button className="button-primary" onPress={axiosPostData}>
          <Text font="display" size="xs" weight="semibold">
            Publish
          </Text>
        </Button>
        <Text>{errors}</Text>
      </div>
    </>
  )
}

export default ComponentView
