import * as tokenService from "../services/tokenService.js"

function getLocation(location) {  
  return fetch(`/api/resources/${location}`)
  .then(res => res.json())
}

function getBarDetails(id) {  // cocktails-route(Merkis) branch; this function gets us an individual bar's details
  return fetch(`/api/resources/${id}`)
  .then(res => res.json())
}

function createCocktail(formData) {
  return fetch(`/cocktails`, {
    method: "PUT",
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`, 
      'Content-Type': 'application/json'},
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
}

//function getAllCocktails()


export {
  getLocation,
  getBarDetails,
  createCocktail
}

// comment 
// `https://api.yelp.com/v3/businesses/search?categories="drinks"&term=cocktail-bars&location=${location}`