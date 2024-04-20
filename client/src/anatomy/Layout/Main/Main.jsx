import React, { useEffect } from 'react'
import { DetailsCard } from '../../../components/Card/Cards';
import { WorkoutForm } from '../../../components/Form/Forms';
import { useWorkoutContext } from '../../../context/ContextProvider';

const Main = () => {
  const { workouts, dispatch } = useWorkoutContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/workouts/');
        const data = await response.json();
        console.log(data);

        if (response.ok) {
          dispatch({ type: 'ALL_WORKOUTS', payload: data })
        } else if (!response.ok)  {
          throw new Error('Request failed with status ' + response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    const text = '[{"first": "Ford", "second":"BMW", "third":"Audi"} ]';
    const myArr = JSON.parse(text);
    console.log(myArr)

    fetchWorkouts();
  }, [dispatch])
  console.log(workouts);

  return (
    <main className='mb-5 | grid md:grid-cols-[1fr,_400px] content-start place-content-center gap-5'>
      <section className='space-y-2'>
        <h2 className='text-xl'>All Workouts</h2>

        {/* <section>
          {
            workouts? 
            workouts.map((workout) => {
              (<p key={workout._id}>Workout</p>)
            }):
            <p>No Workouts</p>
          }
        </section> */}

        <div className='mt-4 | grid gap-4 lg:grid-cols-2 justify-items-stretch'>
          {[1, 2, 3].map( item =>(
              <DetailsCard cardKey={item} id={item} />
          ))}
        </div>
      </section>

      <section className='max-w-[600px] space-y-2 | row-start-1 md:row-span-2 '>
        <h2 className='text-xl'>Add a new Workout Form</h2>
        <WorkoutForm />
      </section>
    </main>
  )
}

export default Main