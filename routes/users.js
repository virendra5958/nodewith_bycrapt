const express = require('express');
const router = express.Router();
const controllers = require('../controller/users');

router.post("/register", controllers.userRegistration ,()=> console.log('fetch'));
router.post("/login", controllers.userLogin);
router.post("/logout", controllers.userLogout);

module.exports = router;
