import React from "react";
import Style from "./recipe.module.css";

const Recipes = ({ key, title, calories, image, ingredients }) => {
  return (
    //this component would be used to render all results from the API query
    <div className={Style.recipe_card}>
      <img src={image} alt="" />
      <div className={Style.card_text}>
        <h1> {title} </h1>
        <p> {calories} </p>
        <ul>
          {ingredients.map(ingredientData => (
            <li> {ingredientData.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipes;
