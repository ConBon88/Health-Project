const jwt = require('jsonwebtoken')
const User = require('../models/usersModel')

const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({error: 'Authorization token required'})
  }

  const token = authorization.split(' ')[1]

  try {
    const { _id } = jwt.verify(token, process.env.SECRET)

    req.user = await User.findOne({ _id }).select('_id')
    next()

  } catch (error) {
    res.status(401).json({error: 'Request is not authorized'})
  }
}

// Middleware to check if the user is a doctor
const requireDoctor = (req, res, next) => {
  if (req.user && req.headers.doctor) {
    next(); // Continue if the user is a doctor
  } else {
    res.status(403).json({ error: 'Access denied' }); // Block access if the user is not a doctor
  }
};

// Export both middleware functions
module.exports = { requireAuth, requireDoctor };