const mongoose=require('mongoose');

const sliderSchema = mongoose.Schema({
    imgUrl:String,
    title:String,
    description:String,
    status:String
});

module.exports=mongoose.model('Slide',sliderSchema);