import React, { useState } from 'react';
import './Tracking.css'; 

function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setTrackingNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock status update for demonstration
    setStatus(`Tracking number ${trackingNumber} is currently in transit.`);
  };

  return (
    
    <div className="bggimage">
        <br></br>
        <section id="tracking"> </section>
    <div className="container">
      <section id="track-load">
        <h2>Track a Load</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="trackingNumber"
            placeholder="Enter Tracking Number"
            value={trackingNumber}
            onChange={handleChange}
          />
          <button type="submit">Truck Load</button>
        </form>
        {status && <p className="status">{status}</p>}
      </section>
      <aside className="sidebar">
        <div className="sidebar-content">
          <h3>About This Feature</h3>
          <p>
            Use the tracking feature to monitor the status of your shipments by entering the tracking number.
            Once you submit the tracking number, you will receive an update on the current status of the load.
            This feature helps you stay informed about the progress of your shipments and manage them effectively.
          </p>
        </div>
      </aside>
    </div>
    </div>
  );
}

export default Tracking;
