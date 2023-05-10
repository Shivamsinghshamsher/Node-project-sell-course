const mongoose=require('mongoose');



// For First Banner
const banner1Schema= mongoose.Schema({
    title:String,
    description:String,
    buttonText:String,
    buttonUrl:String
});

module.exports.banner1Schema= mongoose.model("Banner1",banner1Schema);

// For Second Banner
const banner2Schema= mongoose.Schema({
    title:String,
    description:String,
    buttonText:String,
    buttonUrl:String,
    image:String
});

module.exports.banner2Schema= mongoose.model("Banner2",banner2Schema);


// For Third Banner
const banner3Schema= mongoose.Schema({
    title:String,
    description:String,
    buttonText:String,
    buttonUrl:String,
    image:String
});

module.exports.banner3Schema= mongoose.model("Banner3",banner3Schema);