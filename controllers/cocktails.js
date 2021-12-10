import { Cocktail } from "../models/cocktail.js"
import { Bar } from "../models/bar.js"

function create(req, res) {
    req.body.author = req.user.profile
    Cocktail.create(req.body)
    .then(newCocktail => {
        newCocktail.populate('author')
            .then(() => {
                res.json(newCocktail)
            })     
    })
}

function getAllCocktails(req, res) {
    Cocktail.find({barID: req.params.id})
    .populate('author')
    .then(cocktail => {
        console.log(cocktail)
        res.json(cocktail)
    })
}

function deleteCocktail(req, res) {
    Cocktail.findByIdAndDelete(req.params.id)
        .then((cocktail)=>{
            res.json(cocktail)
        })
}

function update(req, res) {
    req.body.author = req.user.profile
    Cocktail.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(updatedCocktail => {
            updatedCocktail.populate('author')
            .then(() => {
                res.json(updatedCocktail)
            })
        })
}

export {
    create,
    getAllCocktails,
    deleteCocktail as delete,
    update,
}