const User = require('../models/usersModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    // Extract the required fields from the user object
    const { id, fName, surname, dob, doctor, phone } = user;

    res.status(200).json({id, email, token, fName, surname, dob, doctor, phone})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {fName, surname, dob, doctor, email, password, phone} = req.body

  try {
    const user = await User.signup(fName, surname, dob, doctor, email, password, phone)

    // create a token
    const token = createToken(user._id)
    
    res.status(200).json({
      id: user.id,
      email: user.email, 
      token,
      fName: user.fName,
      surname: user.surname,
      dob: user.dob,
      doctor: user.doctor,
      phone: user.phone
    })
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser }