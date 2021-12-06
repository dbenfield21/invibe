import { Cocktail } from "../models/cocktail.js"
import { Bar } from "../models/bar.js"

function create(req, res) {
    req.body.author = req.user.profile
    Cocktail.create(req.body)
    .then(newCocktail => {
        Bar.findOne({id: req.body.barID})
        .then(bar => {
            if(bar){
            bar.id = req.body.barID
            res.json(newCocktail)
            } else {
                Bar.create({id: req.body.barID})
                res.json(newCocktail)
            }
        })
        
    })

}

function getAllCocktails(req, res) {
    console.log(req.params.id)
    Cocktail.find({barID: req.params.id})
    .then(cocktail => {
        res.json(cocktail)
    })
}

export {
    create,
    getAllCocktails
}