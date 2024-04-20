import React, { useEffect, useState } from 'react'
import { DetailsCard } from '../../../components/Card/Cards';

const Main = () => {
  const [ workouts, setWorkouts ] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/workouts');
        if (!response.ok) {
          throw new Error('Request failed with status ' + response.status);
        }
        
        const data = await response.json();
        console.log(data);
        // setWorkouts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    const text = '[{"first": "Ford", "second":"BMW", "third":"Audi"} ]';
    const myArr = JSON.parse(text);
    console.log(myArr)

    fetchWorkouts();
  }, [])
  console.log(workouts);

  return (
    <main className='space-y-2'>
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
      <section className='mt-4 | grid gap-2 md:grid-cols-2 lg:grid-cols-3'>
        {[1, 2, 3].map( item =>(
            <DetailsCard key={item} />
        ))}
      </section>
    </main>
  )
}

export default Main