import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LinkedInLogo from '../../public/lnlogo.png';

export default function ASLingo() {
  return (
    <>
        <h1 style={{ color: '#0056b3', marginBottom: '20px' }}>ASLingo</h1>
        <p>This is a Forum project that I worked on. It is a regular forum website where you can register and login.</p>
        <p>Along with this you can also</p>
        <p>Here are some photos of the what the website looks like.</p>
        <div style={{ marginBottom: '20px' }}>
            <img src="../../images/aslingo-example.png" alt="ASLingo Image" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
        </div>

        <p>Check out the <a href="https://github.com/JRusso64/HackRU23" target="_blank" rel="noopener noreferrer">GitHub repository</a> for more details on the project.</p>
        
        <a href="https://www.linkedin.com/in/john-russo-993435255/" target="_blank" rel="noopener noreferrer">
          <Image src={LinkedInLogo} width={32} height={32}alt="LinkedIn Profile" />
        </a> 
    </>
  );
}
