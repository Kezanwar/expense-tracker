import React from 'react'
import './Card.css'

// Example of creating a card component for UI

function card(props) {

    const classes = "card" + props.classes;

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default card
