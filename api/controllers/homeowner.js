const express = require('express');
// const { ListingPage } = require('../../client/src/pages/ListingPage');
const router = express.Router();
const db = require('../models');

const { Homeowner, Listing } = db;

router.get('/', (req, res) => {
  // retrieve all listings from database
  Homeowner.findOne({}).then((homeowner) => {
    // console.log(homeowner.lists[0]);
    if (homeowner) {
      Listing.findOne({ where: { id: homeowner.lists[0] } }).then((listing) => {
        res.json({ homeowner: homeowner, listing: listing });
      });
    }
  });
});

router.post('/', (req, res) => {
  const { firstName, lastName, lists } = req.body;
  //   console.log(lists);
  Homeowner.create({
    firstName,
    lastName,
    lists,
  }).then((homeowner) => res.status(201).json(homeowner));
});
module.exports = router;
