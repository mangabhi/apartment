import React,{useEffect,useState} from 'react'
import './App.css';
import Home from './Home'



function App() {
  const [home,setHome]=useState([])

    useEffect(()=>{
      getHouse()
      console.log("Running on Here")
    },[])

    const getHouse=async()=>{
      const res=await fetch(example)
      const data=await res.json();
      setHome(data.offers)
      console.log(data.offers)
    }

  const example="https://api.holidu.com/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien"
  return (
    <div className="App">
       <div className="los">
           {/* <Home title={home[0].details.apartmentTypeTitle image={}} /> */}
           {home.map((r)=>(
             <Home title={r.details.name} image={r.photos} logo={r.price.currency} pri={r.price.total}/>
           ))}
       </div>
    </div>
  );
}

export default App;
