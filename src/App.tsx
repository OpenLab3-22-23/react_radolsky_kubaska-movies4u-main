import { useState } from 'react'
import './App.css'
import Header from './Header'
import Movie from './Movie'

function App() {
  const [count, setCount] = useState(0)

 
    return (
      <div className="App"> 
      
        <Header/>
        <Movie/>
        
      </div>
      
    )
  }
  
  
  
  
  
  
  
  export default App