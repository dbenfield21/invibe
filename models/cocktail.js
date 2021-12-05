import mongoose from 'mongoose'

const cocktailSchema = new mongoose.Schema({
    name: String,
    imageURL: String,
    content: String,  //changed from bio to content
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}
})

const Cocktail = mongoose.model('Cocktail', cocktailSchema)

export {
    Cocktail
}