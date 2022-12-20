const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

import { useState } from 'react'
import './App.css'
import Header from './Header'
import Movie from './Movie'
import Searchbar from './Searchbar'

function App() {
  const [count, setCount] = useState(0)

  const [movies, setMovies] = useState({})


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4aa85df1femsh10586ea3d3dcf22p1512c8jsn67654fb5b0e6',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };

  getData();
  function getData() {
    fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);

    })
    .catch(err => console.error(err));
 }
  
  return (
      <div className="App"> 
      
        <Header/>
        <Searchbar/>
        
        <Movie/>
      

      </div>
      
    )
  }
  
  
  
  
  
  
  
  export default App