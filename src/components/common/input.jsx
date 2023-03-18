import React, { Component } from 'react';

const Input = ({label , onChange , name , value , error }) => {
    return ( 
        <div className="form-group my-3">
            <label className='form-label' htmlFor="username">{label}</label>
            <input 
              name={name}
              value={value}
              onChange={onChange}
              id={name}
              type="text"
              className="form-control"
            />
            {error && <div className="alert alert-danger mt-2">{error}</div>}
        </div>
     );
}
 
export default Input;