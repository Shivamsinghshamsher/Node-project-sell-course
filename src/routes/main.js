const express = require('express');
const routes = express.Router();
const details = require('../models/details');
const slider = require("../models/slider");
const services = require('../models/services');
const contact = require('../models/contact');
const banners = require('../models/banners');
const gallery = require('../models/gallery');


routes.get("/", async (request, response) => {
    //Retriving data from database

    const detail = await details.findOne({ _id: "645b5c4e8a8b64f9add8c34c" });
    // console.log(detail);
    const sliderDataFromDb = await slider.find()
    // console.log(sliderDataFromDb);
    const servicesFromDb = await services.find();
    // console.log(servicesFromDb);

    const banner1Data = await banners.banner1Schema.find();
    // console.log(banner1Data);
    const banner2Data = await banners.banner2Schema.find();
    const banner3Data = await banners.banner3Schema.find();

    response.render('index',
        {
            detailFromDb: detail,
            sliderData: sliderDataFromDb,
            services: servicesFromDb,
            banner1: banner1Data,
            banner2: banner2Data,
            banner3: banner3Data
        });

});


routes.get("/gallery", async (req, res) => {
    const detail = await details.findOne({ _id: "645b5c4e8a8b64f9add8c34c" });
    // console.log("navbar from gallery" + detail);
    const galleryDataFromDb = await gallery.find();
    // console.log(galleryDataFromDb);

    res.render('gallery', {
        detailFromDb: detail,
        galleryData: galleryDataFromDb

    });
})

module.exports = routes;


routes.post("/contact-form", async (req, res) => {
    const contactDataFromUser = req.body;
    // console.log(contactDataFromUser);
    try {
        const data = await contact.create(req.body)
        // console.log(data);
        res.redirect("/")
    } catch (error) {
        res.redirect("/")
    }
})



//Admin panel

routes.get("/admin", (req, res) => {


    res.render('admin');
})



routes.post("/admin", async (req, res) => {
    // For Slider Section
    // const AdminReqBody=req.body;
    // To add a slide
    if (req.body.add === "add") {

        const sliderDataFromUser = req.body;
        console.log(sliderDataFromUser);
        try {
            const sliderDataInDb = await slider.create(sliderDataFromUser);
            console.log("Successfully added a slide ");
            res.redirect("/admin");
        } catch (error) {
            console.log(error);
            res.redirect("/admin");

        }
    }

    // To delete a slide
    if (req.body.delete === "delete") {


        const TitleToDeleteSlide = req.body.title;
        // console.log("Title which slide you want to delete: " + TitleToDeleteSlide);
        slider.findOneAndDelete({ title: TitleToDeleteSlide })
            .then((data) => {
                console.log("Successfully Deleted The slide " + data);
                res.redirect("/admin");
            })
            .catch((error) => {
                console.error(error);
                res.redirect("/admin");
            })
    }
});

