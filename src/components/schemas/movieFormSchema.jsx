import * as yup from "yup";

export const movieFormSchema = yup.object().shape({
  title: yup.string().required("Required!"),
  genreName: yup
    .string()
    .oneOf(["Action", "Thriller", "Comedy"], "Invalid")
    .required("Required!"),
  numberInStock: yup.number().min(0).max(100).required("Required!"),
  dailyRentalRate: yup.number().min(0).max(10).required("Required!"),
});
