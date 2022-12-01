import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'
import SearchBar from'./SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Header/>
    
  )
 
}
function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search" />
      <label>
        
      </label>
    </form>
  );
}

export default App
