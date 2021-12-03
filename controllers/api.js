import axios from "axios"
import Bar from "../models/bar.js"

function index(req, res){
    res.send("INDEX PAGE FOR API RESOURCES")
}

function show(req, res) {
    axios.get(`https://api.yelp.com/v3/businesses/${req.params.id}`, {headers: {Authorization: `Bearer ${process.env.API_KEY}`}})
    .then(apiResponse => {
        Bar.findById(req.params.id)
        .populate("cocktails")
        .then(bar => 
        res.json({"details": apiResponse.data, "cocktails": bar.cocktails})
        )
    })
}

function show(req, res) {
    axios.get(`https://api.yelp.com/v3/businesses/${req.params.id}`, {headers: {Authorization: `Bearer ${process.env.API_KEY}`}})
    .then(apiResponse => {
        Bar.findById(req.params.id)
        .populate("cocktails")
        .then(bar => 
        res.json({"details": apiResponse.data, "cocktails": bar.cocktails})
        )
    })
}





export {
    index, 
    showBars,
    show
}