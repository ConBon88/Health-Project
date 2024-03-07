import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { faAnglesLeft, faMoon, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css_Styles/navbar.css'
import { useColor } from '../context/ColorContext';


const Navbar = () => {
  // Custom hook to handle logout functionality
  const { logout } = useLogout()

  // Custom hook to access user information from the authentication context
  const { user } = useAuthContext()

  // React Router hook to get the current location
  const location = useLocation()

  // Check if the current page is the homepage ("/")
  const homepage = location.pathname === '/'

  // Function to handle the logout button click
  const handleClick = () => {
    logout()
  }

  const { setColor } = useColor()
  const [isColorChanged, setIsColorChanged] = useState(
    localStorage.getItem('isColorChanged') === 'true'
  );
  
  useEffect(() => {
    const rootStyle = getComputedStyle(document.documentElement);
    if (!isColorChanged) {
      localStorage.setItem('primary', rootStyle.getPropertyValue('--primary').trim());
      localStorage.setItem('secondary', rootStyle.getPropertyValue('--secondary').trim());
      localStorage.setItem('background', rootStyle.getPropertyValue('--lightBG').trim());
      localStorage.setItem('button', rootStyle.getPropertyValue('--buttonColor').trim());
      localStorage.setItem('titleText', rootStyle.getPropertyValue('--lightText').trim());
    }
  }, []); // Empty dependency array to run only on component mount
  
  //change color function
  const change = () => {
    const rootStyle = getComputedStyle(document.documentElement);
    let newIsColorChanged = !isColorChanged; // Calculate the new state first
  
    if (!newIsColorChanged) {
      const darkPrimary = rootStyle.getPropertyValue('--darkPrimary').trim();
      const darkSecondary = rootStyle.getPropertyValue('--darkSecondary').trim();
      const darkBG = rootStyle.getPropertyValue('--darkBG').trim();
      const darkButtonColor = rootStyle.getPropertyValue('--darkButtonColor').trim();
      const darkTitle = rootStyle.getPropertyValue('--darkText').trim();
      setColor('#a7e2f2')

      document.documentElement.style.setProperty('--primary', darkPrimary);
      document.documentElement.style.setProperty('--secondary', darkSecondary);
      document.documentElement.style.setProperty('background', darkBG);
      document.documentElement.style.setProperty('--buttonColor', darkButtonColor);
      document.documentElement.style.setProperty('--lightText', darkTitle);
    } else {
      document.documentElement.style.setProperty('--primary', localStorage.getItem('primary'));
      document.documentElement.style.setProperty('--secondary', localStorage.getItem('secondary'));
      document.documentElement.style.setProperty('background', localStorage.getItem('background'));
      document.documentElement.style.setProperty('--buttonColor', localStorage.getItem('button'));
      document.documentElement.style.setProperty('--lightText', localStorage.getItem('titleText'));
      setColor('#0000FF')
    }
  
    setIsColorChanged(newIsColorChanged);
    localStorage.setItem('isColorChanged', newIsColorChanged);
  };
  return (
    <header>
      <div className="container">
        {/* Link to the homepage */}
        <Link to="/">
          <h1>Health Hub</h1>
        </Link>

        <nav>
          <div className='darkButton-containter'>
            
          </div>
          
          {/* If a user is logged in */}
          {user && (
            <div className='left'>
            <span className='fullname'><b>{user.fName} {user.surname}</b></span>

              {/* Logout button */}
              <button onClick={handleClick}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} /> 
              </button>
              {/* If not on the homepage, show a back button to the homepage */}
              {homepage ? null : (
                <Link to="/">
                  <button>
                    <FontAwesomeIcon icon={faAnglesLeft} />
                  </button>
                </Link>
                
              )}
              <button onClick={change}>
                <FontAwesomeIcon icon={faMoon} />
              </button>
            </div>
          )}
          
          {/* If no user is logged in */}
          {!user && (
            <div>
              {/* Link to the login page */}
              <Link to="/login">
                <button>
                  Login
                </button>
              </Link>
              {/* Link to the signup page */}
              <Link to="/register"><button>Signup</button></Link>
              <button onClick={change}>
                <FontAwesomeIcon icon={faMoon} />
              </button>
            </div>
          )}
          
        </nav>
      </div>
    </header>
  )
}

export default Navbar