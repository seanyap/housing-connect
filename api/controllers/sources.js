const express = require("express");
const router = express.Router();
const path = require("path");

// route handlers for sources can't be sent by json like images
router.get("/img/:fileid", (req, res) => {
  const { fileid } = req.params;

  // malicious to use ../
  // res.sendFile(__dirname + "/../data/apt-" + fileid + ".jpeg");
  res.sendFile(path.resolve(__dirname + "/../data/apt-" + fileid + ".jpeg"));
});

module.exports = router;
