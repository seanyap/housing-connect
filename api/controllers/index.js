const express = require("express");
const router = express.Router();

// Load each controller
const postsController = require("./posts.js");
const appConfigController = require("./appConfig.js");
const authController = require('./auth.js');

const listingsController = require("./listings.js");
const sourcesController = require("./sources.js");

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/auth', authController);
router.use("/posts", postsController);
router.use("/application-configuration", appConfigController);

router.use("/listings", listingsController);
router.use("/sources", sourcesController);

module.exports = router;
