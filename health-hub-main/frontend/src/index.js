import React from 'react';
import ReactDOM from 'react-dom/client';
import './css_Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/AuthContext'
import { ReportsContextProvider } from './context/ReportContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <AuthContextProvider>
    <ReportsContextProvider>
    <App />
    </ReportsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
