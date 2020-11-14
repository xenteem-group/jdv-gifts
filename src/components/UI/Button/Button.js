import React from 'react'
import classes from './Button.module.scss'

const Button = (props) => {

    return(
        <button>
            {props.text}
        </button>

    )
}

export default Button;