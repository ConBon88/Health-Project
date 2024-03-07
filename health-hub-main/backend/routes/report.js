const express = require('express');
const router = express.Router();

// Import controller functions
const {
  getAllReports,
  getReport,
  createReport,
  updateReport,
  deleteReport
} = require('../controllers/reportController');

// Import middleware
const { requireAuth, requireDoctor } = require('../middleware/requireAuth');

// Apply authentication middleware to all report routes
router.use(requireAuth);

// Routes that should be accessible by doctors only
router.get('/getAll', getAllReports);
router.get('/get/:id', getReport);
router.post('/create', requireDoctor, createReport);
router.patch('/update/:id', requireDoctor, updateReport);
router.delete('/:id', deleteReport);

// The route defined below is an example and should be replaced with actual routes and controller functions
//router.get('/some-doctor-route', requireDoctor, someControllerFunction);

module.exports = router;