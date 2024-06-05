import { number, object, string } from "yup";

export const signupValidation = object({
  title: string()
    .min(3, "must be at least 3 characters long")
    .required("Please enter a workout title"),
  load: number("must be a number").required("Please enter the load of weights"),
  reps: number("must be a number").required("Please enter your number of reps"),
});
