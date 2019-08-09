import React from "react";

const Recipes = ({ title, calories, image }) => {
  return (
    //this component would be used to render all results from the API query
    <div>
      <h1> {title} </h1>
      <p> {calories} </p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipes;
