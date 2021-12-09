import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'
import CocktailForm from "../../components/CocktailForm/CocktailForm.jsx"
import {createCocktail} from "../../services/locationService"
import { getAllCocktails } from "../../services/locationService"
import * as cocktailServices from "../../services/locationService"
import styles from "./BarDetails.module.css"

const BarDetails = (props) => {
  const location = useLocation() 
 
  const bar = location.state

  const [cocktails, setCocktails] = useState([])

  function handleCreateCocktail(formData) {
    createCocktail(formData)
    .then(newCocktail => setCocktails([...cocktails,newCocktail]))
  }

  useEffect(() => {
    getAllCocktails(bar.id)
      .then(allCocktails => setCocktails(allCocktails))
  },[])

  return (
    <>
      <div className={styles.locationContainer}>
        <Link  to="/search">
          <button>Back to Results</button>
        </Link>
          <img className={styles.barImage} src={bar.image_url }alt={bar.name} />
          <h2 className={styles.barName}>{bar.name}</h2>
          <p className={styles.barLocation}>{bar.location.display_address}</p>
          {/* FIX MISSING SPACE IN ADDRESS */}
          <p className={styles.barPhone} >{bar.display_phone}</p>
          {bar.is_closed ? <p className={styles.barOPen} >We're currently closed</p> : <p className={styles.barOPen} >We're currently open</p>}
          <p className={styles.barRating} >Rating: {bar.rating}</p>
          <p className={styles.barPrice} >Price: {bar.price}</p>
          <a className={styles.barLink} href={`${bar.url}`}>Yelp Link</a>
        </div>

        {cocktails.map(cocktail=> 
        <div>
          <p>Author: {cocktail.author.name}</p>
          <p>Cocktail Name: {cocktail.name}</p>
          <p>{cocktail.content}</p>
          <p>{cocktail.imageURL}</p>
        </div>
    )
  }   
      

        <div>
          <CocktailForm  handleCreateCocktail={handleCreateCocktail} />
        </div>
      </>
  );
}

export default BarDetails;