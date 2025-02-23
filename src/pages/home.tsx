import React from 'react'
import { Text } from '../components/'
import { useMediaQuery } from 'react-responsive'

const Home = () => {
  document.body.classList.add('bg-light')
  const isScreenSmall = useMediaQuery({ maxWidth: '1150px' })
  return (
    <>
      <div className={isScreenSmall ? 'home-bg sm' : 'home-bg'}>
        {/* <RetroWindowSVG classNames={isScreenSmall ? 'retro-window-sm' : 'retro-window'} />
        <RetroGridSVG classNames={isScreenSmall ? 'retro-grid-sm' : 'retro-grid'} />
        <InnovateSVG classNames={'innovate-logo'} small={isScreenSmall} /> */}
        <div className="spacer-lg"></div>
        <div className="col-100 justify-center">
          <Text size={isScreenSmall ? 'md' : 'xxl'} font="accent">
            Build your website,
          </Text>
        </div>
        <div className="col-100 justify-center">
          <Text size={isScreenSmall ? 'md' : 'xxl'} font="accent">
            petal by petal.
          </Text>
        </div>
      </div>
      <div className="content">
        <div className="content-bounded"></div>
      </div>
    </>
  )
}

export default Home
