var express = require('express');
var router = express.Router();
const Team  = require("../models/team")

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try{
    const teams = await Team.findAll();
    return res.send("hola");
  } catch {
    return res.status(500).json(err);
  }
});

module.exports = router;
