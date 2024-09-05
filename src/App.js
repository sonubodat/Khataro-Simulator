import React from 'react';
import './App.css';
import Header from './Components/Header';
import LoadBooking from './Components/LoadBooking';
import Tracking from './Components/Tracking';
import UserProfile from './Components/UserProfile';
import InfoBoxes from './Components/InfoBoxes';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header /> {
        
      }
      <div className="video-container">
        <video autoPlay loop muted id="video-background">
          <source src="/1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <h2> Welcome
          </h2>
        </div>
      </div>
      <div className="content-container">
        <main>
          <LoadBooking />
          <Tracking />
          <UserProfile />
        </main>
      </div>
      <div className="home">
      {/* Other components and content */}
      <InfoBoxes />
      {/* Other components and content */}
    </div>
    <div className="App">
      {/* Other components and content */}
      <Footer />
    </div>
    
    </div>
  ); 
}

export default App;
