import React from 'react';
import Link from 'next/link';

export default function ASLingo() {
  return (
    <>
        <h1 style={{ color: '#0056b3', marginBottom: '20px' }}>ASLingo</h1>
        <p>ASLingo is a project that my team and I developed at HackRU, a hackathon hosted by Rutgers University.</p>
        <p>This teaching tool allows users to spell out words letter by letter using American Sign Language.</p>
        <p>We utilized a neural network for which we gathered data ourselves, training our model with Google's Teachable Machine.</p>
        <p>The backend of our application was written in Python, while the GUI was developed using PyQt. This project won us first place at the Hackathon, which was a very rewarding experience.</p>
        <p>I learned a lot from this experience, marking the first time I had developed something that could be used in the real world.</p>
        
        {/* Example of adding images for the project */}
        <div style={{ marginBottom: '20px' }}>
            <img src="../../images/aslingo-example.png" alt="ASLingo Interface" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
        </div>

        {/* Link to the GitHub repository */}
        <p>Check out the <a href="https://github.com/yourgithubusername/aslingo" target="_blank" rel="noopener noreferrer">GitHub repository</a> for more details on our project.</p>
        
        {/* LinkedIn Profile link */}
        <a href="https://www.linkedin.com/in/john-russo-993435255/" target="_blank" rel="noopener noreferrer">
            <img src="../../images/lnlogo.png" alt="LinkedIn Profile" style={{ height: '32px', width: '32px' }}/>
        </a>
    </>
  );
}
