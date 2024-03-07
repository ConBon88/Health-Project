// Imagess.js

import React from 'react';
import HHLogo from '../assets/HHLogo.png'; // Adjust the path based on your file structure
import '../css_Styles/images.css'; // Import a separate CSS file for Imagess styles

function Images() {
  return (
    <div className="logo-container">
      <img
        src={HHLogo}
        alt="HealthHub Logo"
        className="logo-image"
        style={{ maxWidth: '350px', maxHeight: '350px' }}
      />
    </div>
  );
}


export default Images;

