import * as yup from "yup";

export const yupValidationSchema = yup.object().shape({
    email : yup.string().email().required("Required!"),
    password : yup.string().min(5).required("Required!"),
    name : yup.string().min(3).required("Required!")
}); 