import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'
import CocktailReview from "../../components/CocktailReview/CocktailReview.jsx"
import {createCocktail} from "../../services/locationService"
import { getAllCocktails } from "../../services/locationService"
import * as cocktailServices from "../../services/locationService"



const BarDetails = (props) => {
  const location = useLocation() 
  const [reviews, setReviews] = useState([])
  const bar = location.state



  function handleCreateCocktail(formData) {
    createCocktail(formData)
    .then(newCocktail => setReviews([...reviews,newCocktail]))
  }

  function displayCocktails(){
    getAllCocktails()
    .then(allCocktails => setReviews([allCocktails]))
  }



console.log("---------->>>", reviews)
  
  
  return (
    <>
      <div>
      <Link  to="/search">
        <button>Back to Results</button>
      </Link>
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
        <div>
          <CocktailReview barID={bar.id} reviews={reviews} setReviews={setReviews} handleCreateCocktail={handleCreateCocktail} />
        </div>
      </>
  );
}

export default BarDetails;