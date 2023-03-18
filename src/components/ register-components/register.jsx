import React, { Component } from "react";
import { Formik, Form } from "formik";
import RegisterInput from "./registerInput";
import { yupValidationSchema } from "./schemas/schema";
import * as userService from "../../services/userService";

const RegisterForm = () => {

  const onSubmit = async (values , actions) => {
    await new Promise ((resolve) => setTimeout(resolve , 1000));
    if(values) {
      try {
        const response = await userService.register(values);
        localStorage.setItem("token" , response.headers["x-auth-token"]);    //storing jwt token from backend response

        actions.resetForm();
        window.location = "/";
      } catch (err) {
        if (err.response && err.response.status === 400) {
          alert("The User is already Registered!");
        }
      }
    }
  } 

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        name: "",
      }}
      validationSchema={yupValidationSchema}
      onSubmit={onSubmit}
    >
      {({isSubmitting}) => (
        <div className="container w-50 mt-5">
          <h1>Register</h1>
          <Form>
            <RegisterInput
              name="email"
              type="text"
              label="Email"
            />
            <RegisterInput
              name="password"
              type="password"
              label="Password"
            />
            <RegisterInput
              name="name"
              type="text"
              label="Name"
            />
            <button disabled={isSubmitting} className="btn btn-primary mt-3" type="submit">register</button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
