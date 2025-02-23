import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Button, ButtonRound, Icon, Text } from './index'
import { TextField, TextArea } from 'react-aria-components'
import '../style.css'
import DOMPurify from 'dompurify'
import parse from 'html-react-parser'

type ComponentViewProps = {
  id?: string
}

const ComponentView = (props: ComponentViewProps) => {
  const [bgDark, setBgDark] = useState(false)
  const [sizeLarge, setSizeLarge] = useState(false)
  const [tab, setTab] = useState('html')
  const [curTabText, setCurTabText] = useState('')
  const [htmlDisplay, setHtmlDisplay] = useState('')

  const [htmlText, setHtmlText] = useState('')
  const [cssText, setCssText] = useState('')
  const [jsText, setJsText] = useState('')

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
    if (newTab == 'html') {
      setCurTabText(htmlText)
    } else if (newTab == 'css') {
      setCurTabText(cssText)
    } else {
      setCurTabText(jsText)
    }
  }

  function SafeHTMLDisplay({ htmlString }) {
    const sanitizedHTML = DOMPurify.sanitize(htmlString, { KEEP_CONTENT: true })
    console.log(sanitizedHTML)
    return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
  }

  const updateText = (text: string) => {
    if (tab == 'html') {
      setHtmlText(text)
    } else if (tab == 'css') {
      setCssText(text)
    } else {
      setJsText(text)
    }
    setCurTabText(text)
    setHtmlDisplay(SafeHTMLDisplay(parse(text)))
    //console.log(SafeHTMLDisplay(parse(text)))
  }

  const isScreenSmall = useMediaQuery({ maxWidth: '1150px' })
  return (
    <>
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
        <Button>
          <Text>Publish</Text>
        </Button>
      </div>
    </>
  )
}

export default ComponentView
