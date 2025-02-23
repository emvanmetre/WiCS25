import React from 'react'
import '../style.css'
import { useNavigate } from 'react-router-dom'

type CardProps = {
  darkMode?: boolean
  size?: 'standard' | 'reactive'
  ariaLabel: string
  children?: React.ReactNode
  link?: string
}

const Card = (props: CardProps) => {
  const navigate = useNavigate()
  const handleMouseDown = e => {
    e.preventDefault() // Prevents default behavior (e.g., text selection)
    navigate(props.link) // Navigate to item detail page
  }
  const classNames = `card${props.darkMode ? ' card-dark' : ''}${props.size ? ' card-' + props.size : ''}`
  return (
    <div className={classNames} role="button" tabIndex={0} onMouseDown={handleMouseDown} aria-label={props.ariaLabel}>
      {props.children}
    </div>
  )
}

export default Card
