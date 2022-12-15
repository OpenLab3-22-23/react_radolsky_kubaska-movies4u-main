import { useState } from "react"

export default function Header(){
    const [value, setValue]=useState("")
    
    return(
        
        
        <span>  
            <input type="text" className="search" placeholder="Search"value={value} onChange={e=>{setValue(e.target.value); console.log(value)}}  /> 


        </span>
        
    
        
    
    )
}