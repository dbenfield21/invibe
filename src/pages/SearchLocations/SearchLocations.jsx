import SearchForm from "../../components/SearchForm/SearchForm"
import { getLocation } from "../../services/locationService"
import React, { useState } from 'react';


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
      {locationResults.map(bar => 
        <div key={bar.id}>
          <img src={bar.image_url }alt={bar.name} />
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

// results state here and import funciton to make API call. 
