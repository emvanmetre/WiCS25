import React from 'react'
import { Button as ReactAriaButton } from 'react-aria-components'
import type { ButtonProps as ReactAriaButtonProps } from 'react-aria-components'
import '../../style.css'
import { useState } from 'react'

interface ButtonRoundProps<T> extends Omit<ReactAriaButtonProps, 'children'> {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  darkMode?: boolean
  children?: React.ReactNode
}

function ButtonRound<T extends object>({ ...props }: ButtonRoundProps<T>) {
  return (
    <ReactAriaButton {...props} className={`button-round ${props.className ? `${props.className} ` : ''}${props.size ?? 'sm'}`}>
      {props.children}
    </ReactAriaButton>
  )
}

export default ButtonRound
