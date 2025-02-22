import { Button as ReactAriaButton } from "react-aria-components"
import type { ButtonProps as ReactAriaButtonProps } from "react-aria-components"
import '../../style.css'
import { useState } from "react"

interface ButtonProps<T>
    extends Omit<ReactAriaButtonProps, 'children'> {
        className?: string
        darkMode?: boolean
        children?: React.ReactNode
}

function Button<T extends object>({...props}: ButtonProps<T>) {
    const [classes, setClasses] = useState(props.className ? `${props.className}` : '')
    return (
    <ReactAriaButton {...props} className={classes}>
        {props.children}
    </ReactAriaButton>
    )
}

export default Button