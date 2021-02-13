import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  const [recipes, setRecipes] = useState([]);

  const APP_ID = "3fcb3670";

  const APP_KEY = "e6800545f854e50a19be67a0b31a6ff7";

  const Url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await axios.get(Url);
    setRecipes(result.data.hits);

    console.log(result);
    setQuery("");
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <h1 onClick={getData}>food searching app</h1>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search Food"
          autoComplete="off"
          value={query}
          onChange={onChange}
        />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <h2>{recipe.recipe.label}</h2>)}
      </div>
    </div>
  );
}

export default App;
