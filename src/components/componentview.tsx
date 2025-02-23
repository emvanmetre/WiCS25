import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { ButtonRound } from './index'
import { TextField } from 'react-aria-components'
import '../style.css'

type ComponentViewProps = {
  id?: string
}

const ComponentView = (props: ComponentViewProps) => {
  const [bgDark, setBgDark] = useState(false)
  const [sizeLarge, setSizeLarge] = useState(false)

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
  console.log(bgDark)

  const isScreenSmall = useMediaQuery({ maxWidth: '1150px' })
  return (
    <>
      <div className={`content padding-none ${isScreenSmall ? 'col-100' : 'col-60'}`}>
        <div className={`component-view ${bgDark ? 'comp-view-dark' : 'comp-view-light'}`}>
          <ButtonRound className={`bg-white ${bgDark ? '' : 'selected'}`} size="md" onPress={() => handleBg(true)}></ButtonRound>
          <ButtonRound className={`bg-dark ${bgDark ? 'selected' : ''}`} size="md" onPress={() => handleBg(false)}></ButtonRound>
        </div>
      </div>
      <div className={`content padding-none ${isScreenSmall ? 'col-100' : 'col-40'}`}>
        <div className={`component-view component-code`}></div>
      </div>
    </>
  )
}

export default ComponentView
