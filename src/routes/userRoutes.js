const express = require('express');
const router = express.Router();

const userController = require('./../controllers/userController');
const validationsRegisterForm= require('../middlewares/validationsRegisterForm');

router.get('/register' , userController.register);

router.post('/profile', validationsRegisterForm, userController.registerProcess);

//router.get('/profile' , userController.profile);

router.get('/login' , userController.login);


module.exports = router;        