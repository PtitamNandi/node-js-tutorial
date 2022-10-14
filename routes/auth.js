const express = require('express');
const authRoutes = express.Router();
const AuthContoller = require('../controllers/AuthControler')

authRoutes.post('/signup',AuthContoller.signup);
authRoutes.post('/login',AuthContoller.login);

module.exports=authRoutes;