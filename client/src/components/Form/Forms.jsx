import { useState } from "react";
import { useFormik } from "formik";
import { useWorkoutContext } from "../../context/ContextProvider";
import { signupValidation } from "../../utils/signupValidation";
import ErrorText from "../Error/ErrorText";
import Spinner from "../UI/Spinner";
import "./Form.css";

export const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext();

  // *FORMIK IMPLEMNETATION
  const initialValues = { title: "", reps: "", load: "" };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signupValidation,
    onSubmit: (values, { resetForm }) => {
      formSubmit(values, resetForm);
    },
  });

  // *TO HANDLE FORM SUBMISSION
  const formSubmit = async (values, resetForm) => {
    try {
      const response = await fetch(
        "https://server-s3bm.onrender.com/api/workouts",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "CREATE_WORKOUTS", payload: data });
      } else if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }
    } catch (err) {
      console.error("Error:", err);
    }

    resetForm();
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="overflow-hidden | bg-shade py-7 px-5 drop-shadow-md"
    >
      <fieldset className="space-y-6">
        {/* <legend className="w-full">
          {!(JSON.stringify(errors) === "{}") && (
            <h2 className="py-2 px-4 rounded bg-orange-500/10 font-poppins text-orange-500 text-center border border-orange-500  ">
              Complete the Form
            </h2>
          )}
        </legend> */}

        {/* TITLE INPUT */}
        <div className="field">
          <label htmlFor="title">Exercise Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Title"
          />
          {errors.title && touched.title && (
            <ErrorText>{errors.title}</ErrorText>
          )}
        </div>

        {/* REPS INPUT */}
        <div className="field">
          <label htmlFor="reps">Number of Reps</label>
          <input
            id="reps"
            type="number"
            name="reps"
            min={1}
            value={values.reps}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Reps"
          />
          {errors.reps && touched.reps && <ErrorText>{errors.reps}</ErrorText>}
        </div>

        {/* LOAD INPUT */}
        <div className="field">
          <label htmlFor="load">Weight Load (kg)</label>
          <input
            id="load"
            type="number"
            name="load"
            min={1}
            value={values.load}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Load"
          />
          {errors.load && touched.load && <ErrorText>{errors.load}</ErrorText>}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary disabled:bg-zinc-500"
        >
          {isSubmitting ? <Spinner /> : <p>Submit</p>}
        </button>
      </fieldset>
    </form>
  );
};
