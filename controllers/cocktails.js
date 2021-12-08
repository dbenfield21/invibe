import { Cocktail } from "../models/cocktail.js"
import { Bar } from "../models/bar.js"

function create(req, res) {
    req.body.author = req.user.profile
    console.log(req.body.author)
    Cocktail.create(req.body)
    .then(newCocktail => {
        newCocktail.populate('author')
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
        
    })

}

function getAllCocktails(req, res) {
    console.log(req.params.id)
    Cocktail.find({barID: req.params.id})
    .populate('author')
    .then(cocktail => {
        res.json(cocktail)
    })
}

export {
    create,
    getAllCocktails
}