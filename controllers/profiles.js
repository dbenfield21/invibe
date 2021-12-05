import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .populate([
    {
      path: 'favLocations'
    },
    {
      path: 'favBars',
    }, 
    {
      path: 'friends',
    },
  ])
  .then(profiles => {
    res.json(profiles)
    })
  }


  function show(req, res) {
    Profile.findById(req.params.id)
    // .populate("friends")
    .then(profiles => {
      res.json(profiles)
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  }





export {
  index,
  show,
}