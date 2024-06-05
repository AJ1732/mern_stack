import React from 'react'

const ErrorText = ({ children }) => {
  return (
    <small className='text-orange-500'>{ children }</small>
  )
}

export default ErrorText