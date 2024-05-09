import React from 'react'
import { useWorkoutContext } from '../../context/ContextProvider';

export const DetailsCard = ({ id, workout }) => {
  const { dispatch } = useWorkoutContext();
  const { title, reps, load } = workout

  const handleDelete = async () => {
    try {
      const response = await fetch('https://server-s3bm.onrender.com/api/workouts/' + id, {
        method: 'DELETE',
      });
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: 'DELETE_WORKOUT', payload: data })
        console.log('Workout Deleted');
      } else if (!response.ok) {
        throw new Error('Request failed with status ' + response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <article className='relative | max-w-[500px] min-w-72 | bg-shade p-5 space-y-2'>
      <h3 className='text-lg hover:text-primary | transition-all delay-100'>{title}</h3>

      <div className='px-2 | flex justify-between items-center gap-4 | border-l-2 border-cream'>
        <p>Load (kg): {load}</p>
        <p>Reps: {reps}</p>
      </div>

      <p className='pt-5 text-xs font-mono'>Created: <span className='font-medium text-cream'>20th Apr 2024</span></p>
      <button onClick={handleDelete} className='absolute top-0 right-3 | bg-transparent font-bold text-primary py-2 px-4 cursor-pointer'>x</button>
    </article>
  )
}