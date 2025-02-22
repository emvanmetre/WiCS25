import React from 'react'
import { MenuItem as ReactAriaMenuItem } from 'react-aria-components'
import type { MenuItemProps as ReactAriaMenuItemProps } from 'react-aria-components'
import { Text } from '../'

interface MenuItemProps extends Omit<ReactAriaMenuItemProps, 'children'> {
    darkMode?: boolean
    children?: React.ReactNode
}

const MenuItem = (props: MenuItemProps) => {
    let textValue =
        props.textValue ||
        (typeof props.children === 'string' ? props.children : undefined)
    return (
        <ReactAriaMenuItem
            {...props}
            textValue={textValue}
            className={({ isFocused, isOpen }) =>
                `menu-item${isFocused ? ' menu-item-focused' : ''}${isOpen ? ' sub-menu-open' : ''}${props.darkMode ? ' menu-item-dark-mode' : ''}`
            }
        >
            {({ hasSubmenu }) => (
                <>
                    {props.children}
                    {hasSubmenu && (
                        <svg className="chevron" viewBox="0 0 24 24">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    )}
                </>
            )}
        </ReactAriaMenuItem>
    )
}

export default MenuItem
