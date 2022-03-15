import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const API = "https://movie-task.vercel.app/api/popular?page=1";
const SearchAPI = "https://movie-task.vercel.app/api/search?page=1&query="

function App() {
  const[movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(()=>{
    getMovies(API)
    }, [])

  const getMovies = async(link) =>{
    const moviesResp = await fetch(link);
    const moviesR =  await moviesResp.json();
    setMovies(moviesR.data.results);
  }

  const handleChange = (e)=>{
    e.preventDefault();
    console.log(searchTerm);
    getMovies(SearchAPI+searchTerm);
    setSearchTerm("");
  }

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  }


  return( 
  <>
    <header>
      <form onSubmit={handleChange}>
        <input 
        className="search" 
        type="text" 
        placeholder="Search..."
        value = {searchTerm}
        onChange = {handleInput}
        />
      </form>
    </header>
    <div className="movie-container">
      
        {movies.length>0 && movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />
        })}
    </div>
  </>
    );
}

export default App;
