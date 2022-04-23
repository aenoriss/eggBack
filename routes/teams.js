var express = require('express');
var router = express.Router();
const Team  = require("../models/team")

/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log("SUCCESS")
  const teams = await Team.findAll();
  res.send('respond with a resource', teams);
});

module.exports = router;
