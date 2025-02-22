import React from 'react'
import { Popover as AriaPopover, OverlayArrow, Dialog } from 'react-aria-components'
import type { PopoverProps as AriaPopoverProps } from 'react-aria-components'
import '../style.css'

interface PopoverProps extends Omit<AriaPopoverProps, 'children'> {
  skin?: 'light'
  children?: React.ReactNode
  darkMode?: boolean
}

function Popover({ children, ...props }: PopoverProps) {
  const skinClass = props.skin ? ` popover-skin-${props.skin}` : ''

  return (
    <AriaPopover {...props} className={`popover${skinClass}${props.darkMode ? ' popover-dark' : ''}`}>
      <OverlayArrow>
        <svg className="popover-arrow" width={16} height={16} viewBox="0 0 32 32">
          <path d="M0 0 L16 16 L32 0" />
        </svg>
      </OverlayArrow>
      <Dialog>{children}</Dialog>
    </AriaPopover>
  )
}

export default Popover
