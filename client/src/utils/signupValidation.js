import { number, object, string } from "yup";

export const passwordRegex =
  /^(?=.*[!@#$%^&*()_+{}|:"<>?])(?=.*[A-Z])(?=.*[0-9])\S{8,}$/;

export const signupValidation = object({
  title: string()
    .min(3, "must be at least 3 characters long")
    .required("Please enter a workout title"),
  load: number("must be a number").required("Please enter your load"),
  reps: number("must be a number").required("Please enter your Email Address"),

  // cpassword: Yup.string().oneOf([Yup.ref("password")], "Password not matched"),
});
