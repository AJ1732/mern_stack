import React, { useState } from 'react'
import './Form.css'
import { json } from 'react-router-dom';

export const WorkoutForm = () => {
  // STATE
  const [ newWorkout, setNewWorkout ] = useState({
    title: "",
    reps: "",
    load: ""
  })

  const [ error, setError ] = useState(null);

  // FORM FUNCTIONS
  // *To clear the form
  const clearForm = () => setNewWorkout({ title: "", load: "", reps: "" })

  // *To handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWorkout(prev => ({ ...prev, [name]: value }));
  };
  
  // *To handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newWorkout);
    
    try {
      const response = await fetch('/api/workouts', {
        method: 'POST',
        body: JSON.stringify(newWorkout),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        setError(json.error)
        throw new Error('Request failed with status ' + response.status);
      } else {
        setError(null);
        console.log('New Workout Posted');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    clearForm();
  };

  return (
    <form action='' onSubmit={handleSubmit} className='bg-shade py-7 px-5 drop-shadow-md'>
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
            min={0}
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
            min={0}
            value={newWorkout.load}
            onChange={handleChange}
           />
        </div>

        <button className='bg-primary'>Submit</button>
      </fieldset>

      {error && <div className='text-red-500 text-sm'>{error}</div>}
    </form>
  )
}