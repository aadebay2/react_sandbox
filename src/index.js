import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Recipes from "./recipe";
import "./styles.css";

const App = () => {
  const App_ID = process.env.REACT_APP_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  //const App_ID = "44f266c3";
  //const API_KEY = "1bffac3b00abb31de49bb37e1928f153";

  const APIRequest = `https://api.edamam.com/search?q=chicken&app_id=${App_ID}&app_key=${API_KEY}`;

  const [recipes, setRecipesArray] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  //make async calls to the api
  var getRecipes = async () => {
    const response = await fetch(APIRequest);
    const data = await response.json();
    setRecipesArray(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <h1> Hello React</h1>
      <form className="search_form">
        <input tyoe="text" className="search_bar" />
        <button type="submit" className="search_button">
          search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipes />
      ))}
    </div>
  );
};

//export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
