const express = require('express');
// const { ListingPage } = require('../../client/src/pages/ListingPage');
const router = express.Router();
const db = require('../models');
const { Op } = require('sequelize');
const { route } = require('./listings');

const { Tenant, Listing } = db;

router.get('/', (req, res) => {
  // retrieve all listings from database
  Tenant.findOne({ order: [['id', 'DESC']] }).then((tenant) => {
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

router.put('/:id', (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  Listing.findOne({ where: { id: id } }).then((listing) => {
    listing.status = req.body.statusButton;
    listing.save().then((savedListing) => {
      // console.log(savedListing);
      res.json(savedListing);
    });
  });
  // .then((listing) => {
  //   console.log(listing);
  //   res.json(listing);
  // });
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
