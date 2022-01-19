import mongoose from 'mongoose'

const cocktailSchema = new mongoose.Schema({
    name: String,
    imageURL: String,
    content: String,  
    barID: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}
},{
    timestamps: true,
})

const Cocktail = mongoose.model('Cocktail', cocktailSchema)

export {
    Cocktail
}