import { Profile } from '../models/profile.js'
import { User } from '../models/user.js'

function index(req, res) {
  User.find({})
  .populate("profile")
  .then(users => res.json(users))
}

export {
  index,
}