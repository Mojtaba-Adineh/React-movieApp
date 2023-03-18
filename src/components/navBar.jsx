import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Movies from './movies';
import Customers from './customers';
import Rentals from './rentals';
import NotFound from './notFound';
import MovieForm from './movieForm'; 
import FormikComponentForm from './formik-component/formikComponentForm';
import RegisterForm from './ register-components/register';
import LogOut from './logout';

const NavBar = () => {
  const [navItems, setNavItems] = useState([
    { name: "Movies", path: "movies", id: 1 },
    { name: "Customers", path: "customers", id: 2 },
    { name: "Rentals", path: "rentals", id: 3 },
    { name: "Login", path: "login", id: 4 },
    { name: "Register", path: "register", id: 5 },
  ]);

  const [user , setUser] = useState();

  useEffect(() => {
    try {

      // const jwt = localStorage.getItem("token");
      // const userJwt = jwtDecode(jwt);
      setUser({name : "mojtaba" , path : "profile" , id : 1234});

       // in case that if jwt dont decode we run website anyway
      if (user) {
        setNavItems([
          { name: "Movies", path: "movies", id: 1 },
          { name: "Customers", path: "customers", id: 2 },
          { name: "Rentals", path: "rentals", id: 3 },
          { name: user.name, path: "profile", id: 4 },
          { name: "Log out", path: "logout", id: 5 },
        ]);
      }
    } catch (err) {}
  }, []);

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-light w-75 m-auto">
        <div className="container-fluid ">
          <Link className="navbar-brand fs-4" to={"/"}>
            Vildy
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item mx-1 fs-5">
                  <Link
                    to={item.path || "#"}
                    className="nav-link"
                    aria-current="page"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <Routes>    
            <Route path='/movies/*' element={<Movies/>}/>
            <Route path='/' element={<Movies/>}/>
            <Route path='/customers' element={<Customers/>}/>
            <Route path='/rentals' element={<Rentals/>}/>
            <Route path='/login' element={<FormikComponentForm/>}/>
            <Route path='/register' element={<RegisterForm/>}/>
            <Route path='/*' element={<NotFound/>}/>
            <Route path='/logout' element={<LogOut/>}/>

            
            <Route path='/movies/:id' element={<MovieForm/>}/>
        </Routes>
    </React.Fragment>
  );
};

export default NavBar;
