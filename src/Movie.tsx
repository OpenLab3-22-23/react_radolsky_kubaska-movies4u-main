import { useState } from "react"
export default function Movie()
{
    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    return(
        <div className="movie">
            <img src={img} alt="image" className="imgofmovie"/>
                
            
            <h3 className="titleofmovie">
                {title}
                </h3>

        </div>
         )

    
}