const express = require('express');
// const { ListingPage } = require('../../client/src/pages/ListingPage');
const router = express.Router();
const db = require('../models');

const { Tenant, Listing } = db;

router.get('/', (req, res) => {
  // retrieve all listings from database
  Tenant.findOne({}).then((tenant) => {
    // console.log(tenant.listings.length);
    if (tenant) {
      Listing.findOne({ where: { id: tenant.listings[0] } }).then((listing) => {
        res.json({ tenant: tenant, listing: listing });
      });
    }
  });
});

router.post('/', (req, res) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    creditScore,
    income,
    listings,
  } = req.body;

  Tenant.create({
    firstName,
    lastName,
    phoneNumber,
    email,
    creditScore,
    income,
    listings,
  }).then((tenant) => res.status(201).json(tenant));
});
module.exports = router;
