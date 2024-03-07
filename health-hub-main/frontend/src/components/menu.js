import { useState } from 'react';
import { useLogout } from '../hooks/useLogout'
import { Link } from 'react-router-dom'
import '../css_Styles/Profile.css';
import { useAuthContext } from '../hooks/useAuthContext'

function Menu() {
  const [menuVisible, setMenuVisible] = useState(false); // State to control menu visibility

  const { user } = useAuthContext()

  // Custom hook to handle logout functionality
  const { logout } = useLogout()

  // Function to handle the logout button click
  const handleClick = () => {
    logout()
  }

  return (
    <header>
      {/* Menu toggle button */}
      <button 
        onClick={() => setMenuVisible(!menuVisible)} 
        style={{ 
          position: 'absolute', 
          top: '10px', 
          left: '70px', 
          padding: '5px',   // Equal padding for a square shape
          fontSize: '20px', // Adjust as needed
          border: '1px solid #ccc',
          borderRadius: '4px', 
          backgroundColor: '#007BFF',  // Blue background
          width: '80px',    // Explicit width for square shape
          height: '80px',   // Explicit height for square shape
          textAlign: 'center',
          lineHeight: '30px',  // Center the icon vertically
          zindex: '-12',
        }}
      >
      ≡
      </button>


      {/* Conditional rendering of the menu */}
      {user && menuVisible &&  (
        <div className="menu">
            <ul>
              <Link to="/">
                <li> 
                  Home
                </li>
              </Link>
              
              <Link to="/about">
                <li>
                  About
                </li>
              </Link>

              <Link to="/search">
                <li>
                  Search
                </li>
              </Link>

              <Link to="/report">
                <li>
                  My Reports
                </li>
              </Link>

              {user.doctor ? (
                <Link to="/createreport">
                  <li>
                    Create Report
                  </li>
                </Link>
              ) : null}
              <li onClick={handleClick}>Logout</li>
            </ul>
        </div>
      )}
      {!user && menuVisible && (
        <div className="menu">
          <ul>
            <Link to="/about">
              <li>
                About
              </li>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Menu;
