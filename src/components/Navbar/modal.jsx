import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import './modal.css';

const Signpopup = ({ isOpen, onClose }) => {

  return (

    <Modal  
    isOpen={isOpen} 
    onRequestClose={onClose} 
    className="xyz">
   
    <button onClick={onClose} className="close-button">❎</button>
    <h2 className="mode-body">Plz <span>Log In</span> or <span>Sign Up</span> for best experience!</h2>

    
    <Link to="/Loginform" onClick={onClose}><button className="modal-button">Sign Up</button></Link>

    <Link to="/Signupform" onClick={onClose}> <button className="modal-button">Log In</button></Link>
   
  </Modal>
 
  );
};

export default Signpopup; 
