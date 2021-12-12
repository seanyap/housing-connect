const express = require("express");
const router = express.Router();
const db = require("../models");
const { Listing } = db;

// route handlers
router.get("/", (req, res) => {
  // retrieve all listings from database
  Listing.findAll({}).then((listings) => res.json(listings));
});

router.post("/", (req, res) => {
  const { address, rent, bedrooms, bathrooms, reqIncome, reqCredit } = req.body;

  Listing.create({
    address,
    rent,
    bedrooms,
    bathrooms,
    reqIncome,
    reqCredit,
  }).then((listing) => res.status(201).json(listing));
});

module.exports = router;
