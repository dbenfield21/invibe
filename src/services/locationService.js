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
    method: "POST",
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`, 
      'Content-Type': 'application/json'},
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
}

function getAllCocktails(id) {
  return fetch(`/cocktails/${id}`)
  .then(res => res.json())
}

function deleteCocktail(id) {
  return fetch(`/cocktails/${id}`,{
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`, 
      'Content-Type': 'application/json'}
  })
  .then(res => res.json())
}


export {
  getLocation,
  getBarDetails,
  createCocktail,
  getAllCocktails,
  deleteCocktail
}

// comment 
// `https://api.yelp.com/v3/businesses/search?categories="drinks"&term=cocktail-bars&location=${location}`