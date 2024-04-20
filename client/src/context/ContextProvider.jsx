import React, { createContext, useContext, useReducer, useState } from 'react'

export const WorkoutContext = createContext(undefined);

export const workoutReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'ALL_WORKOUTS':
      return {
        workouts: payload
      }
      break;
  
    case 'CREATE_WORKOUTS':
      return {
        workouts: [payload, ...state.workouts]
      }
      break;
  
    default:
      return state
      break;
  }
}

export const ContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(workoutReducer, {
    workouts: null
  })

  const value = {
    ...state,
    dispatch
  }

  return (
    <WorkoutContext.Provider value={ value }>
      {children}
    </WorkoutContext.Provider>
  )
}

export const useWorkoutContext = () => useContext(WorkoutContext);

