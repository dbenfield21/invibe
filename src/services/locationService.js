function getLocation(location) {
  return fetch(`/api/resources/${location}`)
  .then(res => res.json())
}


export {
  getLocation
}

// `https://api.yelp.com/v3/businesses/search?categories="drinks"&term=cocktail-bars&location=${location}`