const express = require("express");
const router = express.Router();

const { createJob, applyJob, defaultRoute } = require('../controller/job');

router.get('/', defaultRoute);
router.post('/createJob', createJob);
router.post('/applyJob', applyJob);

module.exports = router