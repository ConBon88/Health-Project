import React from 'react';
import { useAuthContext } from './hooks/useAuthContext'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Notice the change here
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import SearchPage from './pages/SearchPage';
import ReportPage from './pages/ReportPage';
import ReportPage_Create from './pages/ReportPage_Create';
import AboutPage from './pages/AboutPage';
import Menu from './components/menu';
import Navbar from './components/Navbar';
import { ColorProvider } from './context/ColorContext';
import Particlesbackground from './components/particleBackgroud';
import './css_Styles/index.css'



function App() {
  const { user } = useAuthContext()

  return (
    <Router>
      <ColorProvider>
        <Particlesbackground/>
      <Navbar />
      <Menu />
      <div className="pages">
        <Routes>  {/* Use Routes instead of Switch */}
          <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/"/>} />
          <Route path="/register" element={!user ? <RegisterPage /> : <Navigate to="/"/>} />

          <Route path="/" element={user ? <ProfilePage user={user} key={user.id}/> : <Navigate to="/login"/>} />
          <Route path="/profile" element={user ? <ProfilePage user={user} key={user.id}/> : <Navigate to="/login"/>} />
          <Route path="/search" element={user ? <SearchPage /> : <Navigate to="/login"/>}/>
          <Route path="/report" element={user ? <ReportPage/> : <Navigate to="/login"/>}/>
          <Route path="/about"  element={user || !user ? <AboutPage/> : <Navigate to="/about"/>}/>
          <Route path="/createreport" element={user && user.doctor ? <ReportPage_Create/> : <Navigate to="/login"/>}/>
        </Routes>
      </div>
      </ColorProvider>
    </Router>
  )
}

export default App;
