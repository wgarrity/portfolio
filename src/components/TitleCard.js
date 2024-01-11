import React from 'react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const TitleCard = () => {
    const recipientEmail = 'william.michael.garrity@gmail.com'; // Replace with the recipient's email address
    const subject = "Let's Connect!"; // Replace with your desired email subject
  
    const handleEmailClick = () => {
      const tempInput = document.createElement('input');
      tempInput.value = recipientEmail;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
  
      alert('Email address copied to clipboard.');
    };

    const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/william-garrity-5278bb7/', '_blank');
    };      

    const handleCallClick = () => {
        const phoneNumber = '+7604057360';
        const telLink = `tel:${phoneNumber}`;
        window.location.href = telLink;
    };    
    return (
        <section className="titleCard">
            <div><h1>William Garrity</h1><FaRegEnvelope onClick={handleEmailClick} title="william.michael.garrity@gmail.com" /><FaPhone onClick={handleCallClick} title="760-405-7360"/><FaLinkedinIn onClick={handleLinkedinClick} /></div>
            <span>Design Thinker, User Advocate, UX Enthusiast</span>
        </section>
    );
};

export default TitleCard;
