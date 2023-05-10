const mongoose=require('mongoose')

const gallerySchema=mongoose.Schema({
    imageUrl:String,
    description:String
});

module.exports= mongoose.model("Gallery",gallerySchema);