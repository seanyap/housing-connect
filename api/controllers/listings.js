const express = require('express');
const router = express.Router();
const db = require('../models');
const { Listing, Homeowner } = db;

// route handlers
router.get('/', (req, res) => {
  // retrieve all listings from database
  Listing.findAll({}).then((listings) => {
    // console.log(listings);
    res.json(listings);
  });
});
router.get('/:id', (req, res) => {
  const { id } = req.params;
  Listing.findByPk(id).then((listing) => {
    if (!listing) {
      return res.sendStatus(404);
    }

    res.json(listing);
  });
});
router.post('/', (req, res) => {
  const {
    address,
    rent,
    bedrooms,
    bathrooms,
    reqIncome,
    reqCredit,
    ownerId,
    // firstName,
    // lastName,
    // lists,
  } = req.body;

  Listing.create({
    address,
    rent,
    bedrooms,
    bathrooms,
    reqIncome,
    reqCredit,
    ownerId,
  }).then((listing) => res.status(201).json(listing));

  // Homeowner.create({
  //   firstName,
  //   lastName,
  //   lists,
  // }).then((homeowner) => res.status(201).json(homeowner));
});

module.exports = router;
