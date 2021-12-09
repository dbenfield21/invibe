import * as tokenService from "../services/tokenService.js"

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

  function editCocktail(formData) {
    console.log("FORM DATA ID", formData.id)
      return fetch(`/cocktails/${formData.id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${tokenService.getToken()}`, 
          'Content-Type': 'application/json'},
          body: JSON.stringify(formData)

      })
  }
  
  
  export {
    
    createCocktail,
    getAllCocktails,
    deleteCocktail,
    editCocktail
  }