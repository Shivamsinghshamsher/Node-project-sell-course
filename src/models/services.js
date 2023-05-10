const mongoose= require('mongoose');

const serviceSchema= mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    linkText:String,
    link:String
});

module.exports=mongoose.model("Service", serviceSchema);