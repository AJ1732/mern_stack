import React, { useEffect, useState } from 'react'

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
      // if (response.ok) {
      //   console.log(json);
      // }
    }

    const text = '[{"first": "Ford", "second":"BMW", "third":"Audi"} ]';
    const myArr = JSON.parse(text);
    console.log(myArr)

    fetchWorkouts();
  }, [])
  console.log(workouts);

  return (
    <main>
      <h2>All Workouts</h2>
      <section>
        {
          workouts? 
          workouts.map((workout) => {
            (<p key={workout._id}>Workout</p>)
          }):
          <p>No Workouts</p>
        }
      </section>
    </main>
  )
}

export default Main