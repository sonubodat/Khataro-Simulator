import React, { useState } from 'react';
import './LoadBooking.css'; 

function LoadBooking() {
  const [loadDetails, setLoadDetails] = useState({
    origin: '',
    destination: '',
    weight: '',
  });

  const handleChange = (e) => {
    setLoadDetails({ ...loadDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Load booked: ${JSON.stringify(loadDetails)}`);
  };

  return (
    <div className="bgimage">
    <div className="container">
      <section id="book-load">
        <h2>Book a Load</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="origin"
            placeholder="Origin"
            value={loadDetails.origin}
            onChange={handleChange}
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={loadDetails.destination}
            onChange={handleChange}
          />
          <input
            type="text"
            name="weight"
            placeholder="Weight (in tons)"
            value={loadDetails.weight}
            onChange={handleChange}
          />
          <button type="submit">Book Load</button>
        </form>
      </section>
      <aside className="sidebar1">
        <div className="sidebar-content">
          <h3>About This Task</h3>
          <p>
            This form allows users to book a load by entering details such as the origin, destination, and weight of the load.
            Once the form is submitted, the details are displayed in an alert box.
            Use this form to manage your load bookings efficiently and keep track of all necessary information.
          </p>
        </div>
      </aside>
    </div>
    </div>
  );
}

export default LoadBooking;
