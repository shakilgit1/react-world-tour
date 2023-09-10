import { useState } from 'react';
import './Country.css';

const Country = ({country, markVisited, addFlags}) => {
    // console.log(country);
    const {name, flags, area, population, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited? 'purple' : 'black'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={() => markVisited(country)}>Mark as Visited</button>
            <br/>
            <button onClick={() => addFlags(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            {visited? 'I have visited this country' : 'I want to go'}
        </div>
    );
};

export default Country;