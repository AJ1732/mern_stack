import React from 'react'

export const DetailsCard = ({ key }) => {
  return (
    <article key={key} className='max-w-96 min-w-72 | bg-shade p-5 space-y-2'>
      <h3 className='text-lg hover:text-primary | transition-all delay-100'>Workout Title</h3>

      <div className='px-2 | flex justify-between items-center gap-4 | border-l-2 border-cream'>
        <p>Load (kg): 7</p>
        <p>Reps: 40</p>
      </div>

      <p className='pt-5 text-xs font-mono'>Created: <span className='font-medium text-cream'>20th Apr 2024</span></p>
    </article>
  )
}