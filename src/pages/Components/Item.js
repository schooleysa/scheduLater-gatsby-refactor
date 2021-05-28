import * as React from "react"
import { FaTimes } from 'react-icons/fa'
import './App.css';

const Item = (props) => {
    return (
        <div className='item'>
            <div className = 'itemText'>
                <p>{props.item.appointment}</p>
                <span>{props.item.date} {props.item.time}</span>
            </div>
            <div className = 'itemDelete'>
                <FaTimes onClick={() => props.deleteItem(props.item.id)}/>
            </div>
        </div>
    )
}

export default Item
