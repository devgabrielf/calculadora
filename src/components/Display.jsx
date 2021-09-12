import React from "react"
import './Display.css'

const display = props => 
    <div className={`display ${props.fontSize}`}>
        {props.value}
    </div>

export default display