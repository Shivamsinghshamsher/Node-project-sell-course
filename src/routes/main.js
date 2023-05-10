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

    const detail = await details.findOne({ _id: "6456bc02415e492e78517601" });
    // console.log(detail);
    const sliderDataFromDb = await slider.find()
    // console.log(sliderDataFromDb);
    const servicesFromDb = await services.find();
    console.log(servicesFromDb);

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
    const detail = await details.findOne({ _id: "6456bc02415e492e78517601" });
    const galleryDataFromDb = await gallery.find();
    console.log(galleryDataFromDb);

    res.render('gallery', {
        detailFromDb: detail,
        galleryData: galleryDataFromDb

    });
})

module.exports = routes;


routes.post("/contact-form", async (req, res) => {
    const contactDataFromUser = req.body;
    console.log(contactDataFromUser);
    try {
        const data = await contact.create(req.body)
        console.log(data);
        res.redirect("/")
    } catch (error) {
        res.redirect("/")
    }
})



//Admin panel

routes.get("/admin", (req, res) => {


    res.render('admin');
})
let myBrandLogoGlobalVariable;
let myBrandNameGlobalVariable;
routes.post("/admin", (req, res) => {

    const nevbarData = req.body
    console.log(nevbarData);
    console.log(nevbarData.brandLogo);
    myBrandLogoGlobalVariable = nevbarData.brandLogo
    console.log(nevbarData.brandName);

    // For nevbarOption
    console.log(nevbarData.navbarOption);
    console.log(nevbarData.navbarOptionUrl);

    res.redirect("/admin");
});

