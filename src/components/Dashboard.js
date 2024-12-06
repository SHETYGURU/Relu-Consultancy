import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import firebaseConfig from "./connection_db"; 

// Initialize Firebase
import { initializeApp } from 'firebase/app';
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Dashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('overview'); 
  const navigate = useNavigate();

  // Logout and Redirect to Signup
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('userEmail');
        localStorage.removeItem('username');
        navigate('/signup');
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode); 
  };

  // Main content rendering based on active section
  const renderMainContent = () => {
    return (
      <div className={`${darkMode ? 'text-black' : 'text-black'}`}>
        {activeSection === 'overview' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p>We are a digital transformation consultancy and software development company that provides cutting edge engineering solutions, helping companies and enterprise clients untangle complex issues that always emerge during their digital evolution journey.</p>
          </div>
        )}
        {activeSection === 'news' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Latest News</h2>
            <p>Stay updated with the latest from Destion Innovations and the tech world...</p>
          </div>
        )}
        {activeSection === 'stats' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Services </h2>
            <p>1.
            FinTech development services</p><p> 2.Healthcare development services</p><p> 3.Consumer development servicess</p><p> 4.Financial services development services</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} flex flex-col`}>
      {/* Navbar */}
      <nav className={`${darkMode ? 'bg-black' : 'bg-white'} p-4 flex justify-between items-center md:flex-row`}>
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Company Logo" className="w-8 h-8 mr-2" />
          <span className="text-lg font-semibold">Destion Innovations LLP</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={() => setActiveSection('overview')} className="hover:text-gray-300">Overview</button>
          <button onClick={() => setActiveSection('news')} className="hover:text-gray-300">News</button>
          <button onClick={() => setActiveSection('stats')} className="hover:text-gray-300">Stats</button>
          <button onClick={handleLogout} className="hover:text-gray-300">Logout</button>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Vertical Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`flex flex-col items-start ${darkMode ? 'bg-black' : 'bg-white'} p-4 md:hidden`}>
          <button onClick={() => setActiveSection('overview')} className="mb-2 w-full">Overview</button>
          <button onClick={() => setActiveSection('news')} className="mb-2 w-full">News</button>
          <button onClick={() => setActiveSection('stats')} className="mb-2 w-full">Stats</button>
          <button onClick={handleLogout} className="mb-2 w-full">Logout</button>
        </div>
      )}

      {/* Settings Section for Dark/Light Mode */}
      <div className="p-4 flex justify-end items-center">
        <span className="mr-2">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
<label class="relative inline-block w-11 h-6">
  <input
    type="checkbox"
    class="opacity-0 w-0 h-0 peer"
    onChange={toggleDarkMode}
    checked={darkMode}  
  />
  <span class="absolute cursor-pointer inset-0 bg-gray-300 transition duration-400 rounded-full peer-checked:bg-black peer-focus:ring peer-focus:ring-black"></span>
  <span class="absolute left-1 bottom-1 h-5 w-5 bg-white rounded-full transition duration-400 peer-checked:transform peer-checked:translate-x-5"></span>
</label>

      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center p-8 lg:p-16">
        <div className="bg-white dark:bg-gray-800 p-6 shadow-lg w-full max-w-4xl rounded-lg">
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
