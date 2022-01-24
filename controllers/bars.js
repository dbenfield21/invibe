import { Bar } from "../models/bar"

function create(req, res) {
  req.body.author = req.user.profile
  Bar.create(req.body)
  .then(newBar => {
      newBar.populate('author')
          .then(() => {
              res.json(newBar)
          })     
  })
}


export {
  create,
}