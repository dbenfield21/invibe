import SearchForm from "../../components/SearchForm/SearchForm"
import { getLocation } from "../../services/locationService"
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import styles from "./SearchLocations.module.css"

const SearchLocations = (props) => {
  const [locationResults, setlocationResults] = useState([])
  const handleSearch = (locationData) => {
    // console.log(locationData)
    // does the api call 
    getLocation(locationData.location)
    .then(locationResults=> {
      setlocationResults(locationResults.businesses)
    })


    
  }
  return (
    <main>
      <SearchForm handleSearch={handleSearch} />
      <img className={styles.mainImage}src="https://lh5.googleusercontent.com/proxy/FeyJLfzu7WGGIF32xQhaC3fPC2FpqSW8K9eTjc5JwxMXCTloOsHdKLFDih7PEWgn3pvXxKLzCsojup6Yy2hgNK2s-v0bVBQH7EyS=w1200-h630-p-k-no-nu" alt="question mark" />
      {locationResults.map(bar => 
        <div key={bar.id}>
          <Link to="/barDetails" state={bar}><img src={bar.image_url }alt={bar.name} /></Link>
          <h2>{bar.name}</h2>
            <p>{bar.location.display_address}</p>
            {/* FIX MISSING SPACE IN ADDRESS */}
            <p>{bar.display_phone}</p>
            {bar.is_closed ? <p>We're currently closed</p> : <p>We're currently open</p>}
            <p>Rating: {bar.rating}</p>
            <p>Price: {bar.price}</p>
            <a href={`${bar.url}`}>Yelp Link</a>
        </div>
        )}
    </main>
  )
}

export default SearchLocations

// results state here and import function to make API call. 
