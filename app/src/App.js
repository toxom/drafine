import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import RegistrationForm from './RegistrationForm';
import Sidebar from './Sidebar';
import Banner from './Banner';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`app-container ${showModal ? 'modal-open' : ''}`}>
      <Header handleShowModal={handleShowModal} />
      <div className="main-content">
      </div>
      <Footer />

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button onClick={handleCloseModal} className="close-button">
              X
            </button>
            <RegistrationForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
