import mongoose from 'mongoose'

const barSchema = new mongoose.Schema({
    name: String,
    address: String,
    imageURL: String,
    reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cocktail'}]
})

const Bar = mongoose.model('Bar', barSchema)

export {
    Bar
}