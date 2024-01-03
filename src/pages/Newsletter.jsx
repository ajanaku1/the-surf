import React, { useState } from "react";
import Modal from "../components/Modal";
import "./Newsletter.css";

function Newsletter() {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleCloseBtn = () => {
    setModal(!modal);
  };

  return (
    <>
      <div id="newsletter">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h1>Become part of The Surf</h1>
            <p>
              Fusce lacus ante, ornare quis libero et, imperdiet scelerisque
              lacus. In hac habitasse platea dictumst. Etiam quam sapien,
              malesuada nec tincidunt sit amet, lectus.
            </p>
            <button
              onClick={handleModal}
              className="newsletter-content-join-btn"
            >
              Join The Surf Club
            </button>
            <Modal showModal={modal} onClose={handleCloseBtn} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
