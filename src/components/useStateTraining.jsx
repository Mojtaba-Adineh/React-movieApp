import React, { Component } from 'react';
import { useState } from 'react';

const Car = () => {
    const [car , setCar] = useState({
        brand : "nissan",
        model : "GTR35" ,
        color : "red" ,
        year : 2010 ,
    })

    const changeColor = () => {
        setCar (car => {
            return car.color === "red" ? {...car , color : "blue"} : {...car , color : "red"};
        })
    }

    return ( 
        <div>
            <h1>my {car.brand}</h1>
            <p>is a {car.color} {car.model} from {car.year}</p>
            <button onClick={changeColor}>change color</button>
        </div>
     );
}
 
export default Car;