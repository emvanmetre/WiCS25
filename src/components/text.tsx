import React from 'react'
import { Text as ReactAriaText } from 'react-aria-components'
import type { TextProps as ReactAriaTextProps } from 'react-aria-components'

interface TextProps<T> extends Omit<ReactAriaTextProps, 'children'> {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  font?: 'body' | 'accent' | 'display'
  color?: string
  weight?: 'light' | 'regular' | 'medium' | 'bold' | 'semibold' | 'black'
  italic?: boolean
  darkMode?: boolean
  children?: React.ReactNode
  slot?: string
}

/**
 * @param TextProps Optional text properties:
 * - `size` - 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'
 * - `font` - 'body', 'accent', 'display'
 * - `color` - any color token separated by hyphens (e.g. `colors-purple-100`)
 * - `darkMode` - `boolean`
 */
function Text<T extends object>({ size, font, color, darkMode, weight, italic, ...props }: TextProps<T>) {
  const sizeClass = size ? ` ${size}` : ''
  const fontClass = font === 'body' || font === undefined ? '' : ` text-${font}`
  const slotClass = props.slot === 'label' || props.slot === undefined ? '' : ` text-${props.slot}`
  const colorClass = color ? ` text-color-${color}` : ''
  const darkModeClass = darkMode ? ' dark-mode' : ''
  const weightClass = weight ? ` text-${weight}` : ''
  const italicClass = italic ? ' text-italic' : ''

  return (
    <ReactAriaText slot={props.slot} className={`text${sizeClass}${fontClass}${weightClass}${italicClass}${slotClass}${colorClass}${darkModeClass}`}>
      {props.children}
    </ReactAriaText>
  )
}

export default Text
