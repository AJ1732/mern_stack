const Workout = require('../models/workoutModel')
const { verifyID, verifyWorkout } = require('../utils/verify')

// CONTROLLER FUNCTIONS
const getAllWorkouts = async (req, res) => {
  const allWorkouts = await Workout.find({}).sort({ createdAt: -1 })  
  res.status(200).json(allWorkouts) 
}

const getSingleWorkout = async (req, res) => {
  const { id } = req.params
  verifyID(id, res)

  const singleWorkout = await Workout.findById(id);
  verifyWorkout(singleWorkout, res)

  res.status(200).json(singleWorkout) 
}

const deleteWorkout = async (req, res) => {
  const { id } = req.params
  verifyID(id, res);

  const deleteWorkout = await Workout.findOneAndDelete({ _id: id })
  verifyWorkout(deleteWorkout, res)
  
  res.status(200).json(deleteWorkout) 
}

const updateWorkout = async (req, res) => {
  const { id } = req.params
  verifyID(id, res);

  const updateWorkout = await Workout.findOneAndUpdate({ _id: id }, {
    ...req.body
  })
  verifyWorkout(updateWorkout, res)

  res.status(200).json(updateWorkout)  
}

const workout_create_get = (req, res) => {
  res.json({ mssg: 'GET a new workout' }) 
}

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
  
  res.json({ mssg: 'POST a new workout' })  
}

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
  workout_create_get,
  createWorkout
}
