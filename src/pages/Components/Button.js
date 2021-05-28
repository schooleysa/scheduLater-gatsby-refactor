import * as React from "react"
import './App.css';

const Button = (props) => {

    return (
        <div>
            <button className="buttons" onClick={props.toggleAddForm}>{props.text}</button>
        </div>
    )
}

export default Button
