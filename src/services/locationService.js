function getLocation(location) {  
  return fetch(`/api/resources/${location}`)
  .then(res => res.json())
}

function getBarDetails(id) {  // cocktails-route(Merkis) branch; this function gets us an individual bar's details
  return fetch(`/api/resources/${id}`)
  .then(res => res.json())
}


export {
  getLocation,
  getBarDetails
}

// comment 
// `https://api.yelp.com/v3/businesses/search?categories="drinks"&term=cocktail-bars&location=${location}`