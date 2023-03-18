import React, { Component } from 'react';
import { redirect, Route } from 'react-router-dom';
import LoginForm from '../loginForm';
import FormikComponentForm from '../formik-component/formikComponentForm';
import auth from "../../services/authService"

const ProtectedRoute = ({path , component : Component}) => {
    const user = auth.getJwt;

    return ( 
        <Route path={path}
            element= {{user} ? Component : <FormikComponentForm/>}
        />
     );
}
 
export default ProtectedRoute;