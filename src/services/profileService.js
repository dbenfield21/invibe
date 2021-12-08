import * as tokenService from './tokenService'
const BASE_URL = '/api/profile'

function getFollowers(id) {
  return fetch((`/api/profile/${id}`), {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
  })
  .then(res => res.json())
}

function deleteFollowers(id) {
  return fetch((`/api/profile/${id}`), {
    method: 'DELETE',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}


function getProfile(id) {
  console.log("ID----", id)
  return fetch(`${BASE_URL}/${id}`, {
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`,
      },
    })
    .then(res => res.json())
  }


export {
  getFollowers,
  deleteFollowers,
  getProfile,
}