import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import LoginModal from './LoginModal';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => setIsDropdownOpen(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    closeDropdown();
  };

  const closeLoginModal = () => setIsLoginModalOpen(false);

  const goToTracking = (event) => {
    event.preventDefault();  // Prevent the default anchor click behavior
    
    const trackingElement = document.getElementById('tracking');
    if (trackingElement) {
      trackingElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Tracking section not found!");
    }
  };  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header>
        <h1 onClick={() => window.location.href = '/'}>Khataro Simulator</h1>
        <nav>
          <a href="#GPSLive">GPS-LIVE</a>
          <a href="#Shipment">Shipment</a>
          <a href="#book-load">Book Load</a>
          <a href="#tracking" onClick={goToTracking}>Tracking</a> {/* Call goToTracking here */}
          <div className="profile-menu" ref={dropdownRef}>
            <a href="#profile" onClick={toggleDropdown}>Profile</a>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="#login" onClick={openLoginModal}>Login</a>
                <a href="#settings" onClick={() => alert('Settings function here')}>Settings</a>
              </div>
            )}
          </div>
        </nav>
      </header>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </>
  );
}

export default Header;
