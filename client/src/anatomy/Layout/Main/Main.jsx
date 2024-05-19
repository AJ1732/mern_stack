import React, { useEffect, useState } from 'react'
import { DetailsCard } from '../../../components/Card/Cards';
import { WorkoutForm } from '../../../components/Form/Forms';
import { useWorkoutContext } from '../../../context/ContextProvider';

const Main = () => {
  const [ openForm, setOpenForm ] = useState(false);
  const { workouts, dispatch } = useWorkoutContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('https://server-s3bm.onrender.com/api/workouts');
        const data = await response.json();

        if (response.ok) {
          dispatch({ type: 'ALL_WORKOUTS', payload: data })
        } else if (!response.ok)  {
          throw new Error('Request failed with status ' + response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchWorkouts();
  }, [dispatch])

  return (
    <main className='mb-5 | grid md:grid-cols-[1fr,_400px] content-start place-content-center gap-5'>
      <section className='space-y-2'>
        <h2 className='text-xl'>All Workouts</h2>

        <section>
          {
            workouts? 
            <>
              {
                !workouts.length == 0? 
                <div className='mt-4 | grid gap-4 lg:grid-cols-2 justify-items-stretch'>
                  {workouts.map( workout => (
                      <DetailsCard key={workout._id} id={workout._id} workout={workout} />
                  ))}
                </div>
                : 
                <p className='bg-shade p-20 rounded'>No Workouts</p>
              }
            </>
            :
            <p className='bg-shade p-20 rounded'>Loading Workouts... Server seems to be slow. This may take a while</p>
          }
        </section>
      </section>

      <section className='max-w-[600px] space-y-2 | row-start-1 md:row-span-2 '>
        <div className='flex justify-between items-center gap-2'>
          <h2 className='text-xl'>Add New Workout</h2>
          <button 
            onClick={() => setOpenForm(!openForm)} className={`md:hidden`}>
            {openForm? 'Close': 'Add'}
          </button>
        </div>
        <div className={`
          grid overflow-hidden transition-all duration-500 ease-in-out 
          ${openForm? 'grid-rows-[1fr] opacity-100': 'grid-rows-[0fr] opacity-0'}
          md:grid-rows-[1fr] md:opacity-100
        `}>
          <WorkoutForm />
        </div>
      </section>
    </main>
  )
}

export default Main