import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link, Icon, Menu, MenuItem, NavList, Text } from '../index'
import '../../styles/navbar.scss'
import { useLocation } from 'react-router-dom'

type NavbarProps = {
  startInvisible?: boolean
  darkMode?: boolean
}

const Navbar = (props: NavbarProps) => {
  const location = useLocation()
  const [isSticky, setIsSticky] = useState(false)
  const [isInvis, setIsInvis] = useState(false)
  const [currPath, setCurrPath] = useState(location.pathname)

  useEffect(() => {
    setCurrPath(location.pathname)
  }, [location, setCurrPath])

  const makeSticky = () => {
    if (window.scrollY >= 20) {
      if (!isSticky) {
        setIsInvis(false)
      }
      setIsSticky(true)
    } else {
      if (isSticky) {
        setIsInvis(true)
      }
      setIsSticky(false)
    }
  }
  window.addEventListener('scroll', makeSticky)

  const startInvis = props.startInvisible ? ' nav-home' : ''
  const isScreenSmall = useMediaQuery({ maxWidth: '1150px' })
  const navColor = props.darkMode ? 'nav-dark-mode' : 'nav-light-mode'
  const navClasses = `nav${startInvis}${isSticky ? ' nav-sticky' : ''}${isInvis ? ' nav-invisible' : ''} ${navColor}`
  if (isScreenSmall) {
    return (
      <nav className={navClasses}>
        <NavList size="sm">
          <Menu icon="menu" iconSize="lg" iconColor="colors-purple-600" buttonColor="blank">
            <MenuItem isDisabled textValue="About">
              <Link to="/about" type="nav-menu" selected={currPath === '/about'}>
                <Text slot="label">About</Text>
              </Link>
            </MenuItem>
            <MenuItem isDisabled textValue="Experience">
              <Link to="/about" type="nav-menu" selected={currPath === '/about'}>
                <Text slot="label">Experience</Text>
              </Link>
            </MenuItem>
            <MenuItem isDisabled textValue="About 3">
              <Link to="/project" type="nav-menu" selected={currPath === '/project'}>
                <Text slot="label">GHH 2024</Text>
              </Link>
            </MenuItem>
          </Menu>
        </NavList>
        <Link to="/" type="nav">
          <Icon svg="logo" size="lg" color={`${props.darkMode ? 'colors-purple-600' : 'colors-purple-600'}`} />
          <Text font="display" size="xs">
            Elizabeth Van Metre
          </Text>
        </Link>
      </nav>
    )
  } else {
    return (
      <nav className={navClasses}>
        <Link to="/" type="nav">
          <Icon svg="logo" color="colors-purple-600" size="lg" />
          <Text font="display" size="xs">
            Elizabeth Van Metre
          </Text>
        </Link>
        <NavList>
          <Link to="/project" type="nav">
            <Text font="body" size="md" weight="bold">
              GHH 2024
            </Text>
          </Link>
          <Link to="/about" type="nav">
            <Text font="body" size="md" weight="bold">
              About
            </Text>
          </Link>
          <Link to="/about" type="nav">
            <Text font="body" size="md" weight="bold">
              Experience
            </Text>
          </Link>
        </NavList>
      </nav>
    )
  }
}

export default Navbar
