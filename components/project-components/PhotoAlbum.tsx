import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LinkedInLogo from '../../public/lnlogo.png';
export default function PhotoAlbum() {
  return (
    <>
        <h1 style={{ color: '#0056b3', marginBottom: '20px' }}>ASLingo</h1>
        <p></p>
        <p>Check out the <a href="https://github.com/JRusso64/Forum" target="_blank" rel="noopener noreferrer">GitHub repository</a> for more details on the project.</p>
        
        <a href="https://www.linkedin.com/in/john-russo-993435255/" target="_blank" rel="noopener noreferrer">
          <Image src={LinkedInLogo} width={32} height={32}alt="LinkedIn Profile" />
        </a> 

        <p>Technologies Used</p>
        <ul>
          <li>Java</li>
          <li>JavaFX</li>
        </ul>

        <p>Here are some images of what the project looks like.</p>
    </>
  );
}
