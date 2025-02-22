import React from 'react'
import { Button, Icon, Popover } from '../'
import { Menu as ReactAriaMenu, MenuTrigger } from 'react-aria-components'
import type {
    MenuProps as ReactAriaMenuProps,
    MenuTriggerProps,
} from 'react-aria-components'

interface MenuProps<T>
    extends ReactAriaMenuProps<T>,
        Omit<MenuTriggerProps, 'children'> {
    label?: string
    icon?: string
    buttonColor?: 'primary' | 'secondary' | 'tertiary' | 'blank'
    iconColor?: string
    iconSize?: 'sm' | 'md' | 'lg'
    darkMode?: boolean
    children?: React.ReactNode
}

function Menu<T extends object>({
    label,
    icon,
    children,
    ...props
}: MenuProps<T>) {
    const buttonColor = props.buttonColor
        ? `button-${props.buttonColor}`
        : 'button-primary'
    return (
        <MenuTrigger {...props}>
            <Button
                className={`button ${buttonColor}${props.darkMode ? ' button-dark' : ''}`}
            >
                <Icon svg={icon} size={props.iconSize} color={props.iconColor}></Icon>
                {label}
            </Button>
            <Popover skin="light" placement='bottom'>
                <ReactAriaMenu autoFocus {...props}>{children}</ReactAriaMenu>
            </Popover>
        </MenuTrigger>
    )
}

export default Menu
