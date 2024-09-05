import React from 'react';
import './App.css';
import Header from './Components/headers/Header';
import LoadBooking from './Components/loadbooking/LoadBooking';
import Tracking from './Components/tracking/Tracking';
import UserProfile from './Components/userProfile/UserProfile';
import InfoBoxes from './Components/infobox/InfoBoxes';
import Footer from './Components/footers/Footer';
import Gpslive from './Components/GPSLIVE'; // Import GPSLive component
import Shipment from './Components/Shipment'; // Import Shipment component

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="video-container">
        <video autoPlay loop muted id="video-background">
          <source src="/1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
        <h1>Khataro Simulator</h1>
        </div>
      </div>

      <div className="content-container">
        <main>
          <LoadBooking />
          <Tracking />
          <UserProfile />
          
          {/* Add GPSLive and Shipment sections in the main content */}
          <section id="gps-live">
            <Gpslive />
          </section>
          
          <section id="shipment">
            <Shipment />
          </section>
        </main>
      </div>

      <div className="home">
        {/* Other components and content */}
        <InfoBoxes />
        {/* Other components and content */}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
