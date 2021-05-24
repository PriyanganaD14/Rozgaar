const express = require("express"); 
const { seekerAppn } = require("../controller/application");
const router = express.Router(); 

router.post('/seekerAppn', seekerAppn);

module.exports = router