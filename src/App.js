
import React, { useEffect, useState,} from 'react';
import "./App.css";
import MovieCard from './movieCard';

// 75b66443
const API_URL = 'http://www.omdbapi.com?apikey=75b66443';

const movie1 = {
  "Title": "Batman v Superman: Dawn of Justice",
  "Year": "2016",
  "imdbID": "tt2975590",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search)
  }
  useEffect(()=>{
    searchMovies('superman')
  },[])
  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
        placeholder='search for movie'
        value={searchTerm} 
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
       <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
alt="search"
        onClick={()=>searchMovies(searchTerm)}
        />
        </div>
        {
          movies?.length > 0
          ? (
            <div className='container'>
            { movies.map((movie)=>(
              <MovieCard movie={movie} />
            ))}
    
          </div>
          ) : (
            <div className='empty'> 
              <h3>No movies found</h3>
            </div>
          )
        }
    </div>
  )
}

export default App
