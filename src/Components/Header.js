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
    event.preventDefault();
    
    const trackingElement = document.getElementById('tracking');
    if (trackingElement) {
      trackingElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Tracking section not found!");
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  const clearCache = () => {
    localStorage.clear();
    sessionStorage.clear();
    alert('Cache cleared. Please refresh the page.');
  };

  const openHelp = () => {
    window.open('/help', '_blank');
  };

  const goToSettingsPage = () => {
    window.location.href = '/settings';
  };

  const showSiteStatistics = async () => {
    try {
      const response = await fetch('/api/site-statistics');
      const data = await response.json();
      alert(`Statistics:\nTotal Users: ${data.totalUsers}\nTotal Shipments: ${data.totalShipments}`);
    } catch (error) {
      console.error('Error fetching site statistics:', error);
      alert('Failed to load site statistics.');
    }
  };
  const goToGpsLive = (event) => {
    event.preventDefault();
    const gpsLiveSection = document.getElementById('gps-live');
    if (gpsLiveSection) {
      gpsLiveSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('GPS Live section not found!');
    }
  };

  // Scroll to Shipment section
  const goToShipment = (event) => {
    event.preventDefault();
    const shipmentSection = document.getElementById('shipment');
    if (shipmentSection) {
      shipmentSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Shipment section not found!');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  };

  const handleSettingsClick = (e) => {
    e.preventDefault();
    const action = prompt('Choose an action:\n1. Reload Page\n2. Toggle Dark Mode\n3. Clear Cache\n4. Open Help\n5. Go to Settings\n6. Show Site Statistics\n7. Log Out');

    switch(action) {
      case '1':
        handleReload();
        break;
      case '2':
        toggleDarkMode();
        break;
      case '3':
        clearCache();
        break;
      case '4':
        openHelp();
        break;
      case '5':
        goToSettingsPage();
        break;
      case '6':
        showSiteStatistics();
        break;
      case '7':
        handleLogout();
        break;
      default:
        alert('Invalid option.');
    }

    // Make sure the dropdown stays open after the action
    setIsDropdownOpen(true);
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
        <a href="#GPSLive" onClick={goToGpsLive}>GPS-LIVE</a> {/* Call goToGpsLive */}
          <a href="#Shipment" onClick={goToShipment}>Shipment</a> {/* Call goToShipment */}
          <a href="#book-load">Book Load</a>
          <a href="#tracking" onClick={goToTracking}>Tracking</a>
          <div className="profile-menu" ref={dropdownRef}>
            <a href="#profile" onClick={toggleDropdown}>Profile</a>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="#login" onClick={openLoginModal}>Login</a>
                <a href="#settings" onClick={handleSettingsClick}>Settings</a>
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
