import { Cocktail } from "../models/cocktail.js"
import { Bar } from "../models/bar.js"

function create(req, res) {
    req.body.author = req.user.profile
    Cocktail.create(req.body)
    .then(newCocktail => {
        Bar.findOne({id: req.body.barID})
        .then
        res.json(newCocktail)
    })

}

export {
    create
}