import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/profile'

function getFollower(id) {
  return fetch((`/api/profile/${id}`), {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
  })
  .then(res => res.json())
}


function deleteFollower(id) {
  return fetch((`/api/profile/${id}`), {
    method: 'DELETE',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}



export {
  getFollower,
  deleteFollower,
}