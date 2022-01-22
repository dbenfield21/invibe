import * as tokenService from "../services/tokenService.js"

function favoriteBar(id) {
  return fetch((`/api/profile/${id}`), {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
  })
  .then(res => res.json())
}

export {
  favoriteBar,
}