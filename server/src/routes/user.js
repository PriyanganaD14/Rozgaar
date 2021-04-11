const express = require("express");
const router = express.Router();

const { signin, signup } = require('../controller/user');

// localhost:{port}/users/signin
router.post('/signin', signin);

// localhost:{port}/users/signup
router.post('/signup', signup);

module.exports = router;