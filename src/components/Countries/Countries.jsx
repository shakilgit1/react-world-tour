import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
   const [counties, setCountries] = useState([]);
   const [visitedCountries, setVisitedCountries] = useState([]);
   const [visitedFlags, setVisitedFlags] = useState([]);

   const markVisited = country =>{
    //   console.log(country);
      const newVisited = [...visitedCountries, country];
      setVisitedCountries(newVisited)
   };
   const addFlags = flag =>{
       const newFlags = [...visitedFlags, flag];
       setVisitedFlags(newFlags)
   };

   useEffect(() => {

     fetch('https://restcountries.com/v3.1/all')
     .then(res => res.json())
     .then(data => setCountries(data))
   }, [])

    return (
        <div>
            <h3>Countries: {counties.length}</h3>
          
             <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                  {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                  }
                </ul>
             </div>
             <div className="flag-container">
                {
                  visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
             <div className="country-container">
             {
              counties.map(country => <Country 
                key={country.cca3} 
                markVisited ={markVisited} 
                addFlags={addFlags}
                country={country}></Country>)
            }
             </div>
        </div>
    );
};

export default Countries;