import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Recipes from "./recipe";
import "./styles.css";

const App = () => {
  const App_ID = process.env.REACT_APP_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [recipes, setRecipesArray] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const APIRequest = `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${API_KEY}`;

  useEffect(() => {
    //getRecipes();
  }, [query]);

  //make async calls to the api
  var getRecipes = async () => {
    const response = await fetch(APIRequest);
    const data = await response.json();
    setRecipesArray(data.hits);
    //console.log(data.hits);
  };

  //update search
  var updateSearch = e => {
    setSearch(e.target.value);
    //console.log({ search });
  };

  var getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1> Food Recipies</h1>
      <form onSubmit={getSearch} className="search_form">
        <input
          type="text"
          className="search_bar"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search_button">
          search
        </button>
      </form>
      {recipes.map(recipeData => (
        <Recipes
          key={recipeData.recipe.label}
          title={recipeData.recipe.label}
          calories={recipeData.recipe.calories}
          ingredients={recipeData.recipe.ingredients}
          image={recipeData.recipe.image}
        />
      ))}
    </div>
  );
};

//export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
