import React from 'react'
import { Text, Card, ComponentView } from '../components/'
import { useMediaQuery } from 'react-responsive'

const Create = () => {
  document.body.classList.add('bg-light')
  const isScreenSmall = useMediaQuery({ maxWidth: '1150px' })
  return (
    <>
      <div className="content col-100 nav-space">
        <ComponentView></ComponentView>
      </div>
    </>
  )
}

export default Create
