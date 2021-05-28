import * as React from "react"
import './App.css'
import { useState } from 'react'
import Button from './Button'
import AddForm from './AddForm'
import ScheduleItem from './ScheduleItem'

const Body = () => {
    const [scheduleItems, setScheduleItems] = useState([
        { id: 1,
          appointment: 'Dentist Appointment',  
          date: 'May 15th',
          time: '3:30 PM'
        },
        { id: 2,
          appointment: 'Coffee with Sam',  
          date: 'May 18th',
          time: '12:00 PM'
        },
        { id: 3,
          appointment: 'Create React App',  
          date: 'May 19th',
          time: '9:00 AM'
        }
    ])

    const [ showAddForm, setShowAddForm ] = useState(false)

    const addItem = (item) => {
        const id = Math.floor(Math.random() * 1000) + 1
        const newItem = { id, ...item}
        setScheduleItems([...scheduleItems, newItem])
    }

    const deleteItem = (id) => {
        setScheduleItems(scheduleItems.filter((item) => 
            item.id !== id
        ))
    }

    return (
        <div className='wrapper'>
            <Button toggleAddForm={() => setShowAddForm(!showAddForm)} text={showAddForm ? 'Collapse' : 'Add to Schedule'}/>
            {showAddForm ? <AddForm addItem={addItem}/> : ''}
            {scheduleItems.length > 0 ? <ScheduleItem scheduleItems={scheduleItems} deleteItem={deleteItem}
            
            /> : <p className='noItems'>Add some items to your schedule to get started!</p>}
        </div>
    )
}

export default Body  
