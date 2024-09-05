import React, { useState } from 'react';
import './UserProfile.css'; // Import the CSS file

function UserProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="profile" className="profile-section">
      <h2>User Profile</h2>
      <p>Name: John Doe</p>
      <p>Email: johndoe@example.com</p>
      <p>Company: Khataro Inc.</p>
      <button onClick={openModal} className="profile-button">Open Profile Options</button>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Profile Options</h3>
            <button onClick={() => alert('Logout function here')} className="modal-button">Logout</button>
            <button onClick={() => alert('Settings function here')} className="modal-button">Settings</button>
            <button onClick={closeModal} className="modal-button">Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default UserProfile;
