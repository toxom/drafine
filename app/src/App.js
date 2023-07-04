import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import RegistrationForm from './RegistrationForm';
import Sidebar from './Sidebar';
import Banner from './Banner';
import arrowPassive from './assets/arrow_passive.svg';
import spbstu from './assets/spbstu.png';




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

      <main className="main-content">
          {/* Your main content goes here */}
          <img src={arrowPassive} alt="arrowPassive" style={{ maxWidth: '95px', height: 'auto', marginLeft: '50%' }} />

        <h1>Aim High, Goal Far"</h1>
            <p>Imagine a world where reaching your goals becomes an adventure filled with excitement and laughter. Our commitment contracts act as your trusty sidekick, ensuring you stay on track and don't give up when faced with challenges. We've built a community of like-minded individuals and created a platform where you can connect, share your progress, and cheer each other on.</p>


      </main>

      <Footer />

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button onClick={handleCloseModal} className="close-button">
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
