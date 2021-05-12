const express = require("express");
const router = express.Router();

const { defaultRoute , signin, signup, deleteUser, resetPassword, updatePassword } = require('../controller/user');
const auth = require("../middleware/auth");

router.get('/', defaultRoute);
router.post('/signin', signin);
router.post('/signup', signup);
router.delete('/deleteAccount', auth, deleteUser);
router.post('/resetPassword', resetPassword);
router.post('/updatePassword', updatePassword);

module.exports = router;