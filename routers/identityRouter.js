const express = require('express');
const router = express.Router();
const {createIdentity,checkIdentity} = require('../controllers/identityController');

router.post('/signUp',createIdentity);
router.post('/login',checkIdentity);

module.exports = router;