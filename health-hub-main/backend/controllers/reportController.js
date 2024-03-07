const Report = require('../models/reportModel');

// Get all reports for a doctor
const getAllReports = async (req, res) => {
  try {
    // Assuming that doctor's ID will be in the request after auth
    const reports = await Report.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get reports by email
const getReport = async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: 'Email parameter is required' });
  }
  
  try {
    const report = await Report.find({patientEmail: email}).sort({createdAt: -1});

    if (report.length === 0) {
      return res.status(404).json({ error: 'No such report' });
    }
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new report
const createReport = async (req, res) => {
  const { title, description, doctorName, patientEmail, userID } = req.body;
  
  try {
    const report = await Report.create({
      userID,
      title,
      description,
      doctorName,
      patientEmail
    });
    res.status(200).json(report);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an existing report
const updateReport = async (req, res) => {
  const { id } = req.params;
  
  try {
    const report = await Report.findByIdAndUpdate(id, req.body, { new: true });
    if (!report) {
      return res.status(404).json({ error: 'No such report' });
    }
    res.status(200).json(report);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a report
const deleteReport = async (req, res) => {
  const { id } = req.params;
  
  try {
    const report = await Report.findByIdAndDelete(id);
    if (!report) {
      return res.status(404).json({ error: 'No such report' });
    }
    res.status(200).json({ message: 'Report deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllReports,
  getReport,
  createReport,
  updateReport,
  deleteReport
};