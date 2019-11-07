import React, { useState, useEffect } from "react";
import Header from './components/header'
import Movie from './components/Movie'
import Search from './components/Search'
import './movie.css'
const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // you should replace this with yours
const App=()=> {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

   useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);


const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          console.log(jsonResponse.Search)
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  	};

  return (
    <div className="App">
      <Header text="HOOKED"/>
      <Search search={search}/>
      <div className="movices">
        {loading && !errorMessage?(
            <div>
                <span>{loading}</span>
                <p>{errorMessage}</p>
            </div>
        ):(
            movies.map((item)=>{
              return (<Movie key={item.Title} movie={item}/>)  
            })     
        )
      }
      </div>
    </div>
  );
}

export default App;
