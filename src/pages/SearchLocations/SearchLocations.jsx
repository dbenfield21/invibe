import SearchForm from "../../components/SearchForm/SearchForm"
// import { getLocation } from "../../services/locationService"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import styles from "./SearchLocations.module.css"

const SearchLocations = (props) => {
  const { locationResults, searchLocation, handleSearch, resetSearch } = props

  return (
    <main>
      {!locationResults.length ? 
      <div className={styles.searchContainer}>
        <SearchForm handleSearch={handleSearch} />
      </div>
        :
        <div className={styles.content}>
          <h1 className={styles.locationTitle}>{searchLocation}</h1>
          <div className={styles.resultsContainer}>
            {locationResults.map(bar => 
              <div key={bar.id} className={styles.locationCard}>
                <Link to="/barDetails" state={bar} className={styles.barImageContainer}><img className={styles.barImage} src={bar.image_url }alt={bar.name} /></Link>
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
        </div>
      } 
    </main>
  )
}

export default SearchLocations

// results state here and import function to make API call. 
