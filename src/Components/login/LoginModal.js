// LoginModal.js
import React from 'react';
import './LoginModal.css'; // Import the CSS file for the modal

function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert('Login form submitted');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" required />
          </label>
          <br></br>
          <br></br>
          <label>
          Password:
            <input type="password" required />
          </label>
          <button type="submit">Login</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
