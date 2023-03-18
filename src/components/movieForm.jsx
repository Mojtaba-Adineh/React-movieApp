import React, { Component, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import RegisterInput from "./ register-components/registerInput";
import { movieFormSchema } from "./schemas/movieFormSchema";
import CustomSelect from "./customSelectInput";
import { deleteMovie, getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

const MovieForm = () => {
  const [data, setData] = useState({
    title: "",
    genreName: "",
    numberInStock: "",
    dailyRentalRate: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {

    const movieId = id;
    if (movieId === "new") return;

    const selectedMovie = getMovie(movieId);
    if (!selectedMovie) return navigate ("/not-found" , {replace : true});

    setData(mapCurrentMovie(selectedMovie));
  }, []);

  const mapCurrentMovie = (selectedMovie) => {
    return {
      _id : selectedMovie._id,
      title: selectedMovie.title,
      genreName: selectedMovie.genre.name,
      numberInStock: selectedMovie.numberInStock,
      dailyRentalRate: selectedMovie.dailyRentalRate,
    };
  };

  const onSubmit = async (values, actions) => {
    id === "new" ? console.log("") : deleteMovie(id);
    actions.resetForm();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    saveMovie(values);
    console.log(values);
    if (values) {
      navigate("/movies", { replace: true });
    }
  };

  return (
    <Formik 
      initialValues={{
        title: data.title,
        genreName: data.genreName,
        numberInStock: data.numberInStock,
        dailyRentalRate: data.dailyRentalRate,
      }}
      enableReinitialize
      validationSchema={movieFormSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <div className="container w-50 mt-5">
          <h1>Movie Form</h1>
          <Form>
            <RegisterInput  value={props.values.title} name="title" type="text" label="Title" />
            <CustomSelect
              value={props.values.genreName}
              name="genreName"
              type="text"
              label="Genre"
              className="form-select"
              aria-label="Default select example"
            >
              <option value={props.values.genreName}>{props.values.genreName}</option>
              {props.values.genreName === "Action" ? "" : <option value="Action">Action</option>}
              {props.values.genreName === "Comedy" ? "" : <option value="Comedy">Comedy</option>}
              {props.values.genreName === "Thriller" ? "" : <option value="Thriller">Thriller</option>}
            </CustomSelect>
            <RegisterInput
              value={props.values.numberInStock}
              name="numberInStock"
              type="number"
              label="Number in Stock"
            />
            <RegisterInput value={props.values.dailyRentalRate} name="dailyRentalRate" type="number" label="Rate" />
            <button
              disabled={
                props.isSubmitting &&
                !props.isValid ||
                (Object.keys(props.touched).length === 0 &&
                  props.touched.constructor === Object)
              }
              className="btn btn-primary mt-3"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default MovieForm;
