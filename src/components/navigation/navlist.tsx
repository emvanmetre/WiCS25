import React from 'react'

type NavListProps = {
  size?: 'sm' | 'lg'
  children?: React.ReactNode
}

const NavList = (props: NavListProps) => {
  const sizeClass = props.size === 'lg' || props.size === undefined ? '' : ' condensed'
  return <div className={`nav-list${sizeClass}`}>{props.children}</div>
}

export default NavList
