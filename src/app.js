const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const routes = require("./routes/main");
const Detail = require("./models/details");
const slider = require("./models/slider");
const services = require("./models/services");
const bodyParser = require('body-parser')
const banners = require('./models/banners')
const gallery=require('./models/gallery')
const navbar=require('./routes/main')


const app = express();

app.set('view engine', 'hbs');
app.set('views', 'views');
app.use("/static", express.static("public"));

// hbs.registerPartials("/views/partials");
hbs.registerPartials('views/partials');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('', routes)

mongoose.connect("mongodb://127.0.0.1:27017/website_tut")
    .then(() => {
        console.log("Connected to mongodb");

        // gallery.create(
        //     {
        //         imageUrl:"/static/images/pic1.jpg",
        //         description:"Our student is learning coding"
        //     },
        //     {
        //         imageUrl:"/static/images/pic2.jpg",
        //         description:"Practice the programming languages"
        //     },
        //     {
        //         imageUrl:"/static/images/image1.jpg",
        //         description:"Our student is learning coding"
        //     },
        //     {
        //         imageUrl:"/static/images/image3.jpg",
        //         description:"Our student is learning coding"
        //     },
        //     {
        //         imageUrl:"/static/images/image4.jpg",
        //         description:"Our student is learning coding"
        //     },
        //     {
        //         imageUrl:"/static/images/image2.png",
        //         description:"Our student is learning coding"
        //     }
        // );

        // banners.banner3Schema.create(
        //     {
        //         title: "I work for People, not for money",
        //         description: "In this institue you will get best quality education so that you can get success in life and will be eligible to do what you want.",
        //         buttonText: "Learn More",
        //         buttonUrl: "#",
        //         image: "/static/images/pic2.jpg"
        //     }
        // );

        // banners.banner2Schema.create(
        //     {
        //         title: "You will enjoy the Courses",
        //         description: "In this institu you will get best quality education so that you can get success in life and will be eligible to do what you want.",
        //         buttonText: "Explore",
        //         buttonUrl: "#",
        //         image: "/static/images/pic1.jpg"
        //     }
        // );


        // banners.create(
        // banners.banner1Schema.create(
        //     {
        //         title:"Start learning New Techonology courses here by the best faculty",
        //         description:"In this institu you will get best quality education so that you can get success in life and will be eligible to do what you want.",
        //         buttonText:"Start Learning",
        //         buttonUrl:"#"
        //     }
        // );

        // services.create(
        //     {
        //         icon:"fa-brands fa-aws",
        //         title:"Learn aws",
        //         description:"In this course you will learn aws",
        //         linkText:"Visit aws",
        //         link:"https://aws.amazon.com/"
        //     },

        //     {
        //         icon:"fa-solid fa-database",
        //         title:"Learn Database",
        //         description:"In this course you will learn Database",
        //         linkText:"Check-out the course",
        //         link:"#"
        //     },
        //     {
        //         icon:"fa-brands fa-js",
        //         title:"Learn JavaScript",
        //         description:"In this course you will learn JavaScript",
        //         linkText:"Check-out the course",
        //         link:"#"
        //     },

        // );


        // slider.create(
        //     {
        //         imgUrl: "/static/images/img1.jpg",
        //         title: "Learn Node.js",
        //         description: "Learn Node.js From Scratch by Shamsher Singh"
        //     },
        //     {
        //         imgUrl: "/static/images/img2.jpg",
        //         title: "Learn Frontend development",
        //         description: "Learn Frontend development From Scratch by Shamsher Singh"
        //     },
        //     {
        //         imgUrl: "/static/images/img3.jpg",
        //         title: "Learn Backend development",
        //         description: "Learn Backend development From Scratch by Shamsher Singh"
        //         }                
        // );

        // Detail.create({
        //     brandName: "Market Naresh",
        //     brandLogoUrl: "https://yt3.ggpht.com/ZPi35PIqUlD3cERLUdBkhIDBGqMhsH4J1NlVK3q4uwCIibjmVm9LAQLU806Sa5TvVqZ3xBpWAO0=s600-c-k-c0x00ffffff-no-rj-rp-mo",
        //     links: [
        //         {
        //             label: "Home",
        //             url: "/"
        //         },
        //         {
        //             label: "Gallery",
        //             url: "/gallery"
        //         },
        //         {
        //             label: "About",
        //             url: "/about"
        //         },
        //         {
        //             label: "Contact Us",
        //             url: "/contact-us"
        //         }

        //     ]
        // })
       
    })
    .catch((error) => {
        console.log("Database connection error");
        console.error(error);
    })











app.listen(process.env.PORT | 5556, () => {
    console.log("Server is running on port 5556");

})