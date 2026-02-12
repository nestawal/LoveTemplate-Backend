const express = require('express');
const router = express.Router();
const {createPepe,updateQuesAns,viewLetter} = require('../controllers/pepeController');

router.post('/newPepe',createPepe);
router.patch('/updateAns/:letterId',updateQuesAns);
router.patch('/:letterId',viewLetter);

module.exports = router;