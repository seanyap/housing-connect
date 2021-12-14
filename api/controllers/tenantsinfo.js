const express = require('express');
// const { ListingPage } = require('../../client/src/pages/ListingPage');
const router = express.Router();
const db = require('../models');
const { Op } = require('sequelize');

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

router.get('/:id', (req, res) => {
  // retrieve all listings from database
  const { id } = req.params;
  Tenant.findOne({ where: { listings: { [Op.contains]: [id] } } }).then(
    (tenant) => {
      console.log(tenant);
      if (tenant) {
        Listing.findOne({ where: { id: tenant.listings[0] } }).then(
          (listing) => {
            res.json({ tenant: tenant, listing: listing });
          }
        );
      } else {
        res.json();
      }
    }
  );
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
