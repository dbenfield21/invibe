import SearchForm from "../../components/SearchForm/SearchForm"
import { getLocation } from "../../services/locationService"
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import styles from "./SearchLocations.module.css"

const SearchLocations = (props) => {
  const [locationResults, setlocationResults] = useState([])
  const [searchLocation, setSearchLocation] = useState([])
  const handleSearch = (locationData) => {
    getLocation(locationData.location)
    .then(locationResults=> {
      setSearchLocation(locationData.location)
      setlocationResults(locationResults.businesses)
    })

  }
  return (
    <main>
      {!locationResults.length ? 
      <div>
        <SearchForm handleSearch={handleSearch} />
        <img className={styles.mainImage}src="https://lh5.googleusercontent.com/proxy/FeyJLfzu7WGGIF32xQhaC3fPC2FpqSW8K9eTjc5JwxMXCTloOsHdKLFDih7PEWgn3pvXxKLzCsojup6Yy2hgNK2s-v0bVBQH7EyS=w1200-h630-p-k-no-nu" alt="question mark" />
      </div>
        :
        <div className={styles.resultsContainer}>
          <h1>{searchLocation}</h1>
          {locationResults.map(bar => 
            <div key={bar.id} className={styles.locationCard}>
              <Link to="/barDetails" state={bar}><img className={styles.barImage} src={bar.image_url }alt={bar.name} /></Link>
              <div className={styles.barInfoGrid}>
              <h2 className={styles.barName}>{bar.name}</h2>
                <p className={styles.barLocation}>{bar.location.display_address}</p>
                {/* FIX MISSING SPACE IN ADDRESS */}
                <p className={styles.barPhone} >{bar.display_phone}</p>
                {bar.is_closed ? <p className={styles.barOPen}>We're currently closed</p> : <p className={styles.barOPen}>We're currently open</p>}
                <p className={styles.barRating}>Rating: {bar.rating}</p>
                <p className={styles.barPrice}>Price: {bar.price}</p>
                <a  className={styles.barLink}href={`${bar.url}`}>Yelp Link</a>
              </div>
            </div>
            )}
        </div>
}
      
      
    </main>
  )
}

export default SearchLocations

// results state here and import function to make API call. 
