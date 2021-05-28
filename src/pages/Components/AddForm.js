import * as React from "react"
import { useState } from 'react'

const AddForm = (props) => {
    const [appointment, setAppointment] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const onSubmit = (e) => {
        e.preventDefault ()

        props.addItem( {appointment, date, time} )

        setAppointment('')
        setDate('')
        setTime('')
    }

    return (
        <form className='addForm' onSubmit={onSubmit}>
            <label className='sr-only'>Appoitment</label>
            <input type='text' placeholder='Appointment' value={appointment} onChange={(e) => setAppointment(e.target.value)} required/>
            <label className='sr-only'>Date</label>
            <input type='text' placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)} required/>
            <label className='sr-only'>Time</label>
            <input type='text' placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)} required/>

            <input className="buttons" type='submit' value='Save to Schedule'/>
        </form>
    )
}

export default AddForm
