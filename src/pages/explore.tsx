import React, { useEffect, useState } from 'react'
import { Text, Card } from '../components/'
import { useMediaQuery } from 'react-responsive'
import DOMPurify from 'dompurify'
import axios from 'axios'

import '../style.css'

function SafeHTMLDisplay(newHtml: string) {
  const sanitizedHTML = DOMPurify.sanitize(newHtml, { KEEP_CONTENT: true })
  //console.log(sanitizedHTML)
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
}

const createCard = (component: any) => {
  // console.log('creating card with' + component)
  return <Card ariaLabel={component.name}> {SafeHTMLDisplay(component.html)}</Card>
}

const Explore = () => {
  document.body.classList.add('bg-light')
  const isScreenSmall = useMediaQuery({ maxWidth: '1150px' })

  const [cards, makeCards] = useState(<></>)
  let groupedData = []

  useEffect(() => {
    let processing = true
    const axiosFetchData = async (processing: boolean) => {
      await axios
        .get(`http://localhost:4001/Bouquet/`, {
          withCredentials: true, // Required if using credentials
        })
        .then(res => {
          console.log(res)
          if (processing) {
            {
              // console.log(res.data.map((component: any) => component.name))
              //groupedData = res.data
              makeCards(
                <div className="content center wrap">
                  {res.data.map(item => (
                    <Card link={`/component/${item._id}`} size="standard" ariaLabel={item.name} key={item._id}>
                      <div className="content wide-flex-col padding-none">
                        <div className="html-display-crop">{SafeHTMLDisplay(item.html)}</div>
                        <div className="name-container">
                          <Text font="body" size="sm">
                            {item.name === '' ? '[Unnamed Component]' : item.name}
                          </Text>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>,
              )
              // groupedData = chunkArray(res.data, 3) // Group data into rows of 3
              //console.log(groupedData)
            }
          }
        })
        .catch(err => console.log(err))
    }
    axiosFetchData(processing)
  }, [makeCards])
  //console.log(groupedData)
  return (
    <>
      <div className="wide-flex-col content col-100 nav-space">{cards}</div>
    </>
  )
}

export default Explore
