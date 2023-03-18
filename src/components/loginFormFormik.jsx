import { useFormik } from "formik";
import React, { Component } from "react";
import { yupSchema } from './schemas/schema';

const onSubmit = async (values , actions) => {
  await new Promise((resolve) => setTimeout(resolve , 1000));
  actions.resetForm();
}
  
const LoginFormFormik = () => {
  const {values , errors , touched , handleChange , handleBlur , handleSubmit , isSubmitting} = useFormik({
    initialValues : {
      username : "",
      age : "",
      password : "",
      confirmPassword : ""
    },
    validationSchema : yupSchema,
    onSubmit,
  })

  return (
    <div className="w-50 d-flex flex-column m-auto mt-5">
      <h3 className="m-auto">Log in</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            value={values.username}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.username && touched.username ? "input-error form-control" : "form-control"}
            id="username"
          />
          {errors.username && touched.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            value={values.age}
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.age && touched.age ? "input-error form-control" : "form-control"}
            id="age"
          />
          {errors.age && touched.age && <p className="error">{errors.age}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            value={values.password}
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? "input-error form-control" : "form-control"}
            id="password"
          />
          {errors.password && touched.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            confirm password
          </label>
          <input
            value={values.confirmPassword}
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.confirmPassword && touched.confirmPassword ? "input-error form-control" : "form-control"}
            id="confirmPassword"
          />
          {errors.confirmPassword  && touched.confirmPassword  && <p className="error">{errors.confirmPassword }</p>}
        </div>
        <button disabled={isSubmitting} className="btn btn-primary" type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginFormFormik;
