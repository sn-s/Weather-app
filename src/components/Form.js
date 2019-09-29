import React from "react";

const Form = ({getWeather}) => (
  <div>
     <form onSubmit={getWeather} >
        <input type="text" name="city" placeholder="city..."/> 
        <input type="text" name="country" placeholder="country..."/>   
        <button>Get weather</button> 
      </form>
  </div>
)

export default Form;