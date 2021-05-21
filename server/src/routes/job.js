const express = require("express");
const router = express.Router();

const { createJob } = require('../controller/job');

router.post('/createJob', createJob);

module.exports = router