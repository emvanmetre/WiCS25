import React from 'react'
import { Text, Card, ComponentView } from '../components/'
import { useMediaQuery } from 'react-responsive'
import '../style.css'

const Create = () => {
  document.body.classList.add('bg-light')
  const isScreenSmall = useMediaQuery({ maxWidth: '1150px' })
  return (
    <>
      <div className="wide-flex-col content col-100 nav-space">
        <ComponentView id="67bb5cbb7ff32a6b3ae83f4c"></ComponentView>
      </div>
    </>
  )
}

export default Create
