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
    </main>
  )
}

export default SearchLocations

// results state here and import funciton to make API call. 
