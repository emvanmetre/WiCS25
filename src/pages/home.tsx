import React from 'react'
import { Text } from '../components/'
import { useMediaQuery } from 'react-responsive'

const Home = () => {
  document.body.classList.add('webpage')
  const isScreenSmall = useMediaQuery({ maxWidth: '1150px' })
  return (
    <>
      <div className={isScreenSmall ? 'home-bg sm' : 'home-bg'}>
        {/* <RetroWindowSVG classNames={isScreenSmall ? 'retro-window-sm' : 'retro-window'} />
        <RetroGridSVG classNames={isScreenSmall ? 'retro-grid-sm' : 'retro-grid'} />
        <InnovateSVG classNames={'innovate-logo'} small={isScreenSmall} /> */}
      </div>
      <div className="content">
        <div className="content-bounded">
          <Text size="lg" font="display">
            Hmmm, this site is still a WIP...
          </Text>
        </div>
      </div>
    </>
  )
}

export default Home
