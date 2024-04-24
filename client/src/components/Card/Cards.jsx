import React from 'react'
import { useWorkoutContext } from '../../context/ContextProvider';

export const DetailsCard = ({ id, workout }) => {
  const { dispatch } = useWorkoutContext();
  console.log('http://localhost:5000/api/workouts/' + id);

  const handleClick = async (id) => {
    try {
      const response = await fetch('http://localhost:5000/api/workouts/' + id, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        // setError(null);
        dispatch({ type: 'DELETE_WORKOUT', payload: data })
        console.log('Workout Deleted');
      } else if (!response.ok) {
        // setError(json.error)
        throw new Error('Request failed with status ' + response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  console.log(workout);

  return (
    <article className='relative | max-w-[500px] min-w-72 | bg-shade p-5 space-y-2'>
      <h3 className='text-lg hover:text-primary | transition-all delay-100'>Workout Title</h3>

      <div className='px-2 | flex justify-between items-center gap-4 | border-l-2 border-cream'>
        <p>Load (kg): 7</p>
        <p>Reps: 40</p>
      </div>

      <p className='pt-5 text-xs font-mono'>Created: <span className='font-medium text-cream'>20th Apr 2024</span></p>
      <button onClick={handleClick(id)} className='absolute top-0 right-3 | bg-transparent font-bold text-primary py-2 px-4 cursor-pointer'>x</button>
    </article>
  )
}