import React from "react"
import './Button.css'

const button = props =>
    <button 
        onClick={e => props.click && props.click(props.label)}
        className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.ac ? 'ac' : ''}
        ${props.right ? 'right' : ''}
        ${props.bottom ? 'bottom' : ''}
        `}>
        {props.label}
    </button>

export default button