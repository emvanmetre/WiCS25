import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link, Icon, Menu, MenuItem, NavList, Text } from '../index'
import '../../style.css'
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
    makeSticky()
  }, [location, setCurrPath])

  const makeSticky = () => {
    if (location.pathname == '/') {
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
    } else {
      setIsSticky(true)
      setIsInvis(false)
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
          <Menu icon="menu" iconSize="lg" iconColor="colors-primary-grape" buttonColor="blank">
            <MenuItem isDisabled textValue="Explore Components">
              <Link to="/explore" type="nav-menu" selected={currPath === '/explore'}>
                <Text font="display" size="xxs" slot="label">
                  Explore Components
                </Text>
              </Link>
            </MenuItem>
            <MenuItem isDisabled textValue="Create">
              <Link to="/create" type="nav-menu" selected={currPath === '/create'}>
                <Text font="display" size="xxs" slot="label">
                  Create
                </Text>
              </Link>
            </MenuItem>
            <MenuItem isDisabled textValue="How to Use Bouquet">
              <Link to="/howtouse" type="nav-menu" selected={currPath === '/howtouse'}>
                <Text font="display" size="xxs" slot="label">
                  How to Use Bouquet
                </Text>
              </Link>
            </MenuItem>
          </Menu>
        </NavList>
        <Link to="/" type="nav-title">
          <Text font="display" size="md">
            bouquet
          </Text>
        </Link>
      </nav>
    )
  } else {
    return (
      <nav className={navClasses}>
        <Link to="/" type="nav-title">
          <Text font="display" size="md">
            bouquet
          </Text>
        </Link>
        <NavList>
          <Link to="/howtouse" type="nav" selected={currPath === '/howtouse'}>
            <Text font="display" size="xs">
              How to Use Bouquet
            </Text>
          </Link>
          <Link to="/create" type="nav" selected={currPath === '/create'}>
            <Text font="display" size="xs">
              Create
            </Text>
          </Link>
          <Link to="/explore" type="nav" selected={currPath === '/explore'}>
            <Text font="display" size="xs">
              Explore
            </Text>
          </Link>
        </NavList>
      </nav>
    )
  }
}

export default Navbar
