import React, { useState } from 'react'
import './Form.css'

export const WorkoutForm = () => {
  // STATE
  const [ newWorkout, setNewWorkout ] = useState({
    title: "",
    load: "",
    reps: ""
  })

  // HANDLE FUNCTIONS
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWorkout(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
   e.preventDefault();

  };

  return (
    <form action='' onSubmit={handleSubmit} className='bg-shade py-7 px-5'>
      <fieldset className='space-y-6'>
        {/* TITLE INPUT */}
        <div className='field'>
          <label htmlFor="title">Exercise Title</label>
          <input 
            id="title"
            type="text" 
            name="title" 
            value={newWorkout.title}
            onChange={handleChange}
           />
        </div>
        
        {/* REPS INPUT */}
        <div className='field'>
          <label htmlFor="reps">Number of Reps</label>
          <input 
            id="reps"
            type="number" 
            name="reps" 
            value={newWorkout.reps}
            onChange={handleChange}
           />
        </div>

        {/* LOAD INPUT */}
        <div className='field'>
          <label htmlFor="load">Weight Load (kg)</label>
          <input 
            id="load"
            type="number" 
            name="load" 
            value={newWorkout.load}
            onChange={handleChange}
           />
        </div>

        <button className='bg-primary'>Submit</button>
      </fieldset>
    </form>
  )
}