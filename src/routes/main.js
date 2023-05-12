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
    if (req.body.work === "add") {

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
    if (req.body.work === "delete") {


        const TitleToDeleteSlide = req.body.title;
        // console.log("Title which slide you want to delete: " + TitleToDeleteSlide);
        slider.findOneAndDelete({ title: TitleToDeleteSlide }) // What if the title is not found in the database? a slide is present with title "gyan" but i tried to delete the slide and enter the title name "Gyan", it log my message that it was deleted but wasen't
            .then((data) => {
                console.log("Successfully Deleted The slide " + data);
                res.redirect("/admin");
            })
            .catch((error) => {
                console.log("not deleted the slide");
                console.error(error);
                res.redirect("/admin");
            })
    } else

        // *************Add a service*******************

        if (req.body.work === "addService") {
            // console.log(req.body);
            try {
                const addAService = await services.create(req.body);
                console.log("Successfully added a service ");
                res.redirect("/admin");

            } catch (error) {
                console.log(error);
                res.redirect("/admin");

            }
        } else

            // **************** delete a service**********

            if (req.body.work === "deleteService") {
                const titleFromAdminToDeleteService = req.body.title;
                // console.log("title to delete "+titleFromAdminToDeleteService);
                // .replace(/\s/g, "");
                services.findOneAndDelete({ title: titleFromAdminToDeleteService })
                    .then((data) => {
                        console.log("Successfully deleted a service" + data);
                        res.redirect("/admin");
                    })
                    .catch((error) => {
                        console.log("not deleted the service");
                        console.error(error);
                        res.redirect("/admin")
                    })
            }else
            
            
            // ************Banner 1 Section****************
 
            
            if (req.body.work==="replaceBanner1") {
                const banner1BodyFromAdmin=req.body;
                const titleFromAdminToReplaceBanner1 = req.body.title;
                console.log(" banner1 body "+banner1BodyFromAdmin.buttonUrl);
                console.log("banner1BodyFromAdmin.description" ,banner1BodyFromAdmin.description);
                const banner1CurrentFromDb= await banners.banner1Schema.findOne({});
                // console.log("banner1CurrentFromDb "+ banner1CurrentFromDb);
                banner1CurrentTitle= await banner1CurrentFromDb.title;
                console.log("Old Title of banner1 "+banner1CurrentTitle);
            
                // console.log("title to replace "+titleFromAdminToReplaceBanner2);
                 banners.banner1Schema.findOneAndUpdate({title:banner1CurrentTitle}, {$set: {title:titleFromAdminToReplaceBanner1,description:banner1BodyFromAdmin.description,buttonText:banner1BodyFromAdmin.buttonText,buttonUrl:banner1BodyFromAdmin.buttonUrl}})
                 .then((data) => {
                    console.log("Successfully updated banner1");
                    res.redirect("/admin");
                 })
                 .catch((error)=>{
                    console.log("not updated banner1");
                    console.error(error);
                    res.redirect("/admin");
                 })
            
            }else


            // ***********To Replace Banner2 content***************

            if (req.body.work==="replaceBanner2") {
                const banner2BodyFromAdmin=req.body;
                const titleFromAdminToReplaceBanner2 = req.body.title;
                // const banner2CurrentTitle= banners.find();
                // const banner2CurrentFromDb= banners.banner2Schema.find({});
                const banner2CurrentFromDb= await banners.banner2Schema.findOne({});
                console.log("banner2CurrentFromDb "+ banner2CurrentFromDb);
                banner2CurrentTitle= await banner2CurrentFromDb.title;
                console.log("Old Title of banner2 "+banner2CurrentTitle);

                // console.log("title to replace "+titleFromAdminToReplaceBanner2);
                 banners.banner2Schema.findOneAndUpdate({title:banner2CurrentTitle}, {$set: {title:titleFromAdminToReplaceBanner2,description:banner2BodyFromAdmin.description,buttonText:banner2BodyFromAdmin.buttonText,buttonUrl:banner2BodyFromAdmin.buttonUrl,image:banner2BodyFromAdmin.image}})
                 .then((data) => {
                    console.log("Successfully updated banner2");
                    res.redirect("/admin");
                 })
                 .catch((error)=>{
                    console.log("not updated banner2");
                    console.error(error);
                    res.redirect("/admin");
                 })

            }else


            // ***********To Replace Banner3 content***************

            if (req.body.work==="replaceBanner3") {
                const banner3BodyFromAdmin=req.body;
                const titleFromAdminToReplaceBanner3 = req.body.title;
                const banner3CurrentFromDb= await banners.banner3Schema.findOne({});
                console.log("banner3CurrentFromDb "+ banner3CurrentFromDb);
                banner3CurrentTitle= await banner3CurrentFromDb.title;
                console.log("Old Title of banner3 "+banner3CurrentTitle);

                // console.log("title to replace "+titleFromAdminToReplaceBanner3);
                 banners.banner3Schema.findOneAndUpdate({title:banner3CurrentTitle}, {$set: {title:titleFromAdminToReplaceBanner3,description:banner3BodyFromAdmin.description,buttonText:banner3BodyFromAdmin.buttonText,buttonUrl:banner3BodyFromAdmin.buttonUrl,image:banner3BodyFromAdmin.image}})
                 .then((data) => {
                    console.log("Successfully updated banner3");
                    res.redirect("/admin");
                 })
                 .catch((error)=>{
                    console.log("not updated banner3");
                    console.error(error);
                    res.redirect("/admin");
                 })

            }

});

