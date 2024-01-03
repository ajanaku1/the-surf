import React from "react";
import "./Modal.css";

function Modal({ showModal, onClose }) {
  if (!showModal) return null;
  return (
    <div className="overlay">
      <form
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="signup"
      >
        <div className="header-title">
          <h1>Create Account</h1>
          <p onClick={onClose} className="close-btn">
            X
          </p>
        </div>
        <div className="signup-field">
          <input
            id="username"
            type="text"
            name="username"
            className="signup-input"
            required
          />
          <label for="username" className="signup-label">
            Username
          </label>
        </div>
        <div className="signup-field">
          <input
            id="email"
            type="text"
            name="email"
            className="signup-input"
            required
          />
          <label for="email" className="signup-label">
            Email
          </label>
        </div>
        <div className="signup-field">
          <input
            id="password"
            type="text"
            name="password"
            className="signup-input"
            required
          />
          <label for="password" className="signup-label">
            Password
          </label>
        </div>
      </form>
    </div>
  );
}

export default Modal;
