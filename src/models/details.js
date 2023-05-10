
//This schema is for nevbar


const mongoose=require('mongoose')
const Detail=mongoose.Schema({
    brandName:String,
    brandLogoUrl:String,
    links:[
        {
            label:String,
            url:String
        }
    ]
});

module.exports= mongoose.model("Detail", Detail);