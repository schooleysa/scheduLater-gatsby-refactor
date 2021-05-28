import * as React from "react"
import Item from './Item'

const ScheduleItem = (props) => {

    return (
        <div>
            {props.scheduleItems.map((item) => (
                <Item id={item.id} item={item} deleteItem={props.deleteItem} />
            ))}
        </div>
    )
}

export default ScheduleItem
