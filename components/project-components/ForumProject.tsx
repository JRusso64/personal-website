import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LinkedInLogo from '../../public/lnlogo.png';

export default function ASLingo() {
  return (
    <>
        <h1 style={{ color: '#0056b3', marginBottom: '20px' }}>ASLingo</h1>
        <p>ASLingo is a project that my team and I developed at HackRU, a hackathon hosted by Rutgers University.</p>
        <p>This teaching tool allows users to spell out words letter by letter using American Sign Language.</p>
        <p>We utilized a neural network for which we gathered data ourselves, training our model with Google's Teachable Machine.</p>
        <p>The backend of our application was written in Python, while the GUI was developed using PyQt. This project won us first place at the Hackathon, which was a very rewarding experience.</p>
        <p>I learned a lot from this experience, marking the first time I had developed something that could be used in the real world.</p>
        
        <div style={{ marginBottom: '20px' }}>
            <img src="../../images/aslingo-example.png" alt="ASLingo Image" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
        </div>

        <p>Check out the <a href="https://github.com/JRusso64/HackRU23" target="_blank" rel="noopener noreferrer">GitHub repository</a> for more details on our project.</p>
        
        <a href="https://www.linkedin.com/in/john-russo-993435255/" target="_blank" rel="noopener noreferrer">
          <Image src={LinkedInLogo} width={32} height={32}alt="LinkedIn Profile" />
        </a> 
    </>
  );
}
