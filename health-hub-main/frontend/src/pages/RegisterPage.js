import React, { useState } from 'react';
import { useSignup } from "../hooks/useSignup"
import '../css_Styles/register.css'

function RegisterPage() {
  const [formData, setFormData] = useState({
    fname: '',
    surname: '',
    dob: '',
    doctor: false,
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  // Custom hook 'useSignup' to handle signup functionality
  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.phone)
    // Basic validation: Ensure passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Call the 'signup' function from the 'useSignup' hook
    await signup(formData.fname, formData.surname, formData.dob, formData.doctor, formData.email, formData.password, formData.phone)
  }

  return (
    <div className="register-container">
      <div className='title'>
        <center><h1>Register</h1></center>
      </div>
      <form onSubmit={handleSubmit} className='register'>

        <div className="input-group">
          <label>First Name:</label>
          <input
            type="text"
            value={formData.fname}
            onChange={(e) => setFormData(prev => ({ ...prev, fname: e.target.value }))}
          />
        </div>

        <div className="input-group">
          <label>Surname:</label>
          <input
            type="text"
            value={formData.surname}
            onChange={(e) => setFormData(prev => ({ ...prev, surname: e.target.value }))}
          />
        </div>

        <div className="input-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            value={formData.dob}
            onChange={(e) => setFormData(prev => ({ ...prev, dob: e.target.value }))}
          />
        </div>

        <div className="input-group">
        <label>Are you a doctor?
          </label>
          <input
              type="checkbox"
              checked={formData.doctor}
              onChange={(e) => setFormData(prev => ({ ...prev, doctor: e.target.checked }))}
            />
            
        </div>

        <div className="input-group">
          <label>Phone:</label>
          <input
            type="number"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          />
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
        </div>

        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          />
        </div>

        <div className="input-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
          />
        </div>

        {/* Button to submit the signup form */}
        <button disabled={isLoading}>Register</button>

         {/* Display the error message if there is an error */}
         {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default RegisterPage;
