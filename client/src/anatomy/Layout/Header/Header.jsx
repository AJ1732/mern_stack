import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className='flex justify-between items-center | py-5 border-b border-shade'>
        <Link to={`/`}>
          <h1 className='font-semibold text-2xl'>Workouts</h1>
        </Link>

        <ul className='text-cream | flex basis-24 gap-2'>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header