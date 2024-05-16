import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LinkedInLogo from '../../public/lnlogo.png';

export default function TextMessenger() {
  return (
    <>
        <h1 style={{ color: '#0056b3', marginBottom: '20px' }}>ASLingo</h1>
        <p>The personalized text messenger was a project that my team and I developed at HackRU, a hackathon hosted by Rutgers University. This was my first time competing.</p>
        <p>I mainly worked on the api connection to Twilio. This is what allowed us to send text messages to the users. Users could text a phone number to sign up for an account.</p> 
        <p>The user could use this as a journal to keep track of their day.</p> 
        <p>We also added a tic tac toe game that you could play against the computer through your text messages.</p>
        <p>The server was hosted on Glitch which allowed for people to test it out.</p>
        <p>I got to learn a lot about working with apis for this project and overall it was fun to make this project.</p>
        <h1>Technologies Used:</h1> 
        <ul>
            <li>Javascript</li>
            <li>Nodejs</li> 
            <li>Express</li> 
            <li>Twilio</li> 
        </ul> 
        <div style={{ marginBottom: '20px' }}>
            <img src="../../images/textmessenger.png" alt="ASLingo Image" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
        </div>


        <p>Check out the <a href="https://github.com/JRusso64/HackRU-22" target="_blank" rel="noopener noreferrer">GitHub repository</a> for more details on our project.</p>
        
        <a href="https://www.linkedin.com/in/john-russo-993435255/" target="_blank" rel="noopener noreferrer">
          <Image src={LinkedInLogo} width={32} height={32}alt="LinkedIn Profile" />
        </a> 
    </>
  );
}