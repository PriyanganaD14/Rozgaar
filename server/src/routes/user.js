const express = require("express");
const router = express.Router();

const { defaultRoute , signin, signup, deleteUser, resetPassword, updatePassword, updateProfile ,getJobSeekerProf} = require('../controller/user');
const auth = require("../middleware/auth");

router.get('/', defaultRoute);
router.post('/signin', signin);
router.post('/signup', signup);
router.delete('/deleteAccount', auth, deleteUser);
router.post('/resetPassword', resetPassword);
router.post('/updatePassword', updatePassword);
router.patch('/update', auth, updateProfile);

router.post('/getProfile',auth,getJobSeekerProf);

module.exports = router;