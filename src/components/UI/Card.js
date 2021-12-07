import React from 'react'
import './Card.css'

function card(props) {

    const classes = "card" + props.classes;

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default card
