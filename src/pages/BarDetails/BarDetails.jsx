import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'
import CocktailForm from "../../components/CocktailForm/CocktailForm.jsx"
import {createCocktail} from "../../services/locationService"
import { getAllCocktails } from "../../services/locationService"
import * as cocktailServices from "../../services/locationService"



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


 



console.log("---------->>>",cocktails)
  
  
  return (
    <>
    <div>
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
    {cocktails.map(cocktail=> 
    
    <div>
        <p>Author: {cocktail.author.name}</p>
      <p>Cocktail Name: {cocktail.name}</p>
      <p>{cocktail.content}</p>
      <p>{cocktail.imageURL}</p>
      
    </div>
    
      )
}   
</div>

      <div>
        <CocktailForm  handleCreateCocktail={handleCreateCocktail} />
      </div>
      </>
  );
}

export default BarDetails;