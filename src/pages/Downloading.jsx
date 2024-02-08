import React, { useState } from 'react';
import 'animate.css';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import download from '../assets/images/download.svg';
import cb from '../assets/images/closebutton.svg';
import { Link } from 'react-router-dom';
import '../css/Downloading.css';

function Downloading({ setShowModal }) {
  const [showModalState, setShowModalState] = useState(false);

  const handleClose = () => setShowModalState(false);

  const handleDownload = () => {
    // Simulate the download process (replace this with your actual download logic)
    setTimeout(() => {
      // Display toast or trigger any other actions upon download completion
      toast.success('Download completed!');
      // Show the modal
      setShowModalState(true);
    }, 3000); // Simulated delay of 3 seconds
  };

  const goToDownloadsPage = () => {
    // Add logic to navigate to the downloads page based on the browser
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.indexOf('chrome') > -1) {
      window.location.href = 'chrome://downloads/';
    } else if (userAgent.indexOf('firefox') > -1) {
      window.location.href = 'about:downloads';
    } else {
      // Add handling for other browsers if needed
    }
  };

  return (
    <>
      <div className="modal-container">
        <Modal show={showModalState} onHide={handleClose} animation={false} className="animate__animated animate__bounce">
          <Modal.Body className='declan-mod'>
            <div className="div" alt="close-button" onClick={handleClose}>
              <img src={cb} alt="" className='div-img'/>
            </div>
            <div className="mod-content">
              <img src={download} alt="" className='mod-img'/>
              <p className='pdf'>Tony's Resume.pdf</p>
              <h1 className='mod-h1'>Download In Progress!</h1>
              <p className='mod-p'>Kindly check your downloads for the downloaded file.</p>
              <Link to="#" className='mod-link' onClick={goToDownloadsPage}>
                 Go to Downloads
                </Link>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      {/* Download button with link */}
      <div className="center-container">
        {/* Download button with link */}
        <a href="../downloads/Tony's CV.pdf" download="Tony's Resume.pdf" onClick={handleDownload}>
          <button className="download-button">
            <img src={download} alt="" />
            Download
          </button>
        </a>
      </div>
    </>
  );
}

export default Downloading;
