import axios from "axios"

function index(req, res){
    res.send("INDEX PAGE FOR API RESOURCES")
}

function showBars(req, res) {
    axios.get(`https://api.yelp.com/v3/businesses/search?categories="drinks"&term=cocktail-bars&location=${req.params.location}`, {headers: {Authorization: `Bearer ${process.env.API_KEY}`}})

    .then(apiResponse => {
        res.json(apiResponse.data)
    })
}



export {
    index, 
    showBars,
}