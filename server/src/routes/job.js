const express = require("express");
const router = express.Router();

const { createJob, applyJob } = require('../controller/job');

router.post('/createJob', createJob);
router.post('/applyJob', applyJob);

module.exports = router