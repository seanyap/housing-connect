const express = require("express");
const router = express.Router();

// route handlers
router.get("/", (req, res) => {
  // TODO: retrieve actual data from database
  res.json({ rent: "1000", address: "123 John Street, New york" });
});

module.exports = router;
