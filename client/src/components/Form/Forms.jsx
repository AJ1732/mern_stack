import { useState } from 'react';
import { useFormik } from "formik";
import { useWorkoutContext } from '../../context/ContextProvider';
import Spinner from '../UI/Spinner';
import './Form.css'
import { signupValidation } from '../../utils/signupValidation';
import ErrorText from '../Error/ErrorText';

export const WorkoutForm = () => {
  const [ loading, setLoading ] = useState(false);
  const { dispatch } = useWorkoutContext();

  // FORMIK IMPLEMNETATION
  const initialValues = {
    title: "",
    reps: "",
    load: ""
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signupValidation,
    onSubmit: (values) => submitFunction(values),
  });

  // FORM FUNCTIONS
  // *To clear the form
  const clearForm = () => setNewWorkout({ title: "", load: "", reps: "" })

  // *To handle input change
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewWorkout(prev => ({ ...prev, [name]: value }));
  // };
  
  // *To handle form submission
  const formSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true)
      const response = await fetch('https://server-s3bm.onrender.com/api/workouts', {
        method: 'POST',
        body: JSON.stringify(newWorkout),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setLoading(false)

      if (response.ok) {
        // setError(null);
        dispatch({ type: 'CREATE_WORKOUTS', payload: data })
      } else if (!response.ok) {
        // setError(json.error)
        throw new Error('Request failed with status ' + response.status);
      }
    } catch (err) {
      console.error('Error:', err);
    }

    clearForm();
  };

  return (
    <form action='' onSubmit={handleSubmit} className='overflow-hidden | bg-shade py-7 px-5 drop-shadow-md'>
      <fieldset className='space-y-6'>
        <legend></legend>

        {/* TITLE INPUT */}
        <div className='field'>
          <label htmlFor="title">Exercise Title</label>
          <input 
            id="title"
            type="text" 
            name="title" 
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Title'
           />
          {errors.title && touched.title && <ErrorText>{errors.title}</ErrorText>}
        </div>
        
        {/* REPS INPUT */}
        <div className='field'>
          <label htmlFor="reps">Number of Reps</label>
          <input 
            id="reps"
            type="number" 
            name="reps" 
            min={1}
            value={values.reps}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Reps'
           />
          {errors.reps && touched.reps && <ErrorText>{errors.reps}</ErrorText>}
        </div>

        {/* LOAD INPUT */}
        <div className='field'>
          <label htmlFor="load">Weight Load (kg)</label>
          <input 
            id="load"
            type="number" 
            name="load" 
            min={1}
            value={values.load}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Load'
           />
          {errors.load && touched.load && <ErrorText>{errors.load}</ErrorText>}
        </div>

        <button type='submit' disabled={loading} className='bg-primary disabled:bg-zinc-500'>
          {loading ? <Spinner /> : <p>Submit</p>}
        </button>
      </fieldset>

      {/* {error && <div className='text-red-500 text-sm'>{error}</div>} */}
    </form>
  )
}