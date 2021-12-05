import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom'
// import { getLocation } from '../../services/locationService';



const BarDetails = (props) => {
  const location = useLocation()
  const bar = location.state
  
  return (
    <>
      <img src={bar.image_url }alt={bar.name} />
      <h2>{bar.name}</h2>
      <p>{bar.location.display_address}</p>
      {/* FIX MISSING SPACE IN ADDRESS */}
      <p>{bar.display_phone}</p>
      {bar.is_closed ? <p>We're currently closed</p> : <p>We're currently open</p>}
      <p>Rating: {bar.rating}</p>
      <p>Price: {bar.price}</p>
      <a href={`${bar.url}`}>Yelp Link</a>
      <Link to></Link>
    </>
  );
}

export default BarDetails;