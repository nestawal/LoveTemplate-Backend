const express = require('express');
const router = express.Router();
const {createPepe,updateQuesAns,viewLetter,viewMyLetter} = require('../controllers/pepeController');

router.post('/newPepe',createPepe);
router.patch('/updateAns/:letterId',updateQuesAns);
router.get('mine/:letterId',viewMyLetter);
router.patch('/:letterId',viewLetter);

module.exports = router;