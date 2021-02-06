import React from 'react'
import './App.css'

const Home = ({title,image,pri,logo}) => {
    return (
        <div className="los">
            <h1>TITLE:{title}</h1>
            <h2>PRICE- {logo} {pri}</h2>
            {image.map((r)=>(
                
                <img src={r.t} alt={r}/>
                
            ))}
            
        </div>
    )
}
export default Home