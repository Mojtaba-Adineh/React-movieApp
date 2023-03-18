import * as yup from "yup";

const passwordRules = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const yupSchema = yup.object().shape({
  email: yup.string().email().required("Required!"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "create an stronger password!" })
    .required("Required!"),
  
});
