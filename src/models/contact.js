const mongoose= require('mongoose')
const contactSchema = mongoose.Schema({
    email:String,
    phone:String,
    query:String
});

module.exports=mongoose.model("ContactData",contactSchema);