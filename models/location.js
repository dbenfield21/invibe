import mongoose from 'mongoose'

const locationSchema = mongoose.Schema({
    name: String,
    imageURL: String,
    bio: String,
    cocktails: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cocktail'}]
},{
    timestamps: true,
})

const Location = mongoose.model('Location', locationSchema)

export {
    Location
}