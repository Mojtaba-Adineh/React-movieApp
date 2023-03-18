import { useField } from "formik";
import React, { Component } from "react";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <React.Fragment>
      <label className="form-label mt-3" htmlFor={label}>
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? "input-error form-control"
            : "form-control"
        }
        id={label}
      />
      {meta.touched && meta.error ? <p className="error">{meta.error}</p> : ""}
    </React.Fragment>
  );
};

export default CustomInput;
