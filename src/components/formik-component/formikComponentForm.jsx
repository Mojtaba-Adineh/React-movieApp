import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import CustomInput from "./customInput";
import { yupSchema } from "../schemas/schema";
import { login } from "../../services/authService";

const FormikComponentForm = () => {

  const onSubmit = async (values, actions) => {
    if (values) {
      try {
        const {data : jwt } = await login(values.email, values.password);
        localStorage.setItem("token" , jwt);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        actions.resetForm();
        window.location = "/";  //instead of nafigete we use this code to reload the page and this will cuse the navlinks reload
      } catch (err) {
        if (err.response && err.response.status === 400) {
          alert("Error :" + err.response.data);
        }
      }
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={yupSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <div className="container w-50 mt-5">
          <Form>
            <CustomInput
              label="Email"
              type="text"
              name="email"
              placeholder="Enter Email"
            />
            <CustomInput
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <button
              disabled={isSubmitting}
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

export default FormikComponentForm;
