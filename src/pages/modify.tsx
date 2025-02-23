import React from 'react'
import { Text, Card, ComponentView } from '../components/'
import { useMediaQuery } from 'react-responsive'
import '../style.css'
import { useParams } from 'react-router-dom'

const Modify = () => {
  document.body.classList.add('bg-light')
  const { id } = useParams()
  const isScreenSmall = useMediaQuery({ maxWidth: '1150px' })
  return (
    <>
      <div className="wide-flex-col content col-100 nav-space">
        <ComponentView id={id}></ComponentView>
      </div>
    </>
  )
}

export default Modify
