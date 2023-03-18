import React, { Component } from "react";
import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mt-3">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <select
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

export default CustomSelect;
