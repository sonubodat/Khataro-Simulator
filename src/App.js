import React from 'react';
import './App.css';
import Header from './Components/Header';
import LoadBooking from './Components/LoadBooking';
import Tracking from './Components/Tracking';
import UserProfile from './Components/UserProfile';
import InfoBoxes from './Components/InfoBoxes';
import Footer from './Components/Footer';
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
          <h2> Welcome</h2>
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
