const express = require('express')
const { requireAuth } = require('../middleware/requireAuth');
const { getDrugs } = require('../controllers/apiController')

const router = express.Router()

router.use(requireAuth);

//GET all drugs
router.get('/', getDrugs)

module.exports = router