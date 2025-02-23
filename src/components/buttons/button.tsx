import React from 'react'
import { Button as ReactAriaButton } from 'react-aria-components'
import type { ButtonProps as ReactAriaButtonProps } from 'react-aria-components'
import '../../style.css'
import { useState } from 'react'

interface ButtonProps<T> extends Omit<ReactAriaButtonProps, 'children'> {
  className?: string
  darkMode?: boolean
  children?: React.ReactNode
}

function Button<T extends object>({ ...props }: ButtonProps<T>) {
  return (
    <ReactAriaButton {...props} className={`button${props.className ? ` ${props.className}` : ''}`}>
      {props.children}
    </ReactAriaButton>
  )
}

export default Button
