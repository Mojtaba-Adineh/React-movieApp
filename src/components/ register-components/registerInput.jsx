import React, { Component } from "react";
import { useField } from "formik";

const RegisterInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  // const handleChange = (e) => {

  // }

  return (
    <div className="mt-3">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        // onChange={handleChange}
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? "form-control input-error"
            : "form-control"
        }
      />
      {meta.touched && meta.error ? <p className="error">{meta.error}</p> : ""}
    </div>
  );
};

export default RegisterInput;
