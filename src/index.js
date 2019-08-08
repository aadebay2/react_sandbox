import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  const App_ID = process.env.REACT_APP_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const ExampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${App_ID}&app_key=${API_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1> Hello React</h1>
      <form className="search_form">
        <input tyoe="text" className="search_bar" />
        <button type="submit" className="search_button">
          search
        </button>
      </form>
    </div>
  );
};

//export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
