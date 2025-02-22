import React from 'react'
import '../style.css'

type CardProps = {
    darkMode?: boolean
    size?: 'standard' | 'reactive'
    ariaLabel: string
    children?: React.ReactNode
}

const Card = (props: CardProps) => {
    const classNames = `card${props.darkMode ? ' card-dark' : ''}${props.size ? ' card-' + props.size : ''}`
    return (
        <div
            className={classNames}
            role="button"
            tabIndex={0}
            onMouseDown={(e) => e.preventDefault()}
            aria-label={props.ariaLabel}
        >
            {props.children}
        </div>
    )
}

export default Card
