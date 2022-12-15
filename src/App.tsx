import { useState } from 'react'
import './App.css'
import Header from './Header'
import Movie from './Movie'
import Searchbar from './Searchbar'

function App() {
  const [count, setCount] = useState(0)

  const [movies, setMovies] = useState({})
    return (
      <div className="App"> 
      
        <Header/>
        <Searchbar/>
        
        <Movie/>
        
      </div>
      
    )
  }
  
  
  
  
  
  
  
  export default App