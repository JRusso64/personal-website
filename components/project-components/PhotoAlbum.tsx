import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LinkedInLogo from '../../public/lnlogo.png';
import LoginPhoto from '../../public/ForumPictures/loginscreen.jpg';
import RegisterPhoto from '../../public/ForumPictures/registerscreen.jpg'
import PostsPhoto from '../../public/ForumPictures/posts.jpg'

export default function PhotoAlbum() {
  return (
    <>
        <h1 style={{ color: '#0056b3', marginBottom: '20px' }}>ASLingo</h1>
        <p>This is a Forum project that I worked on. It is a regular forum website where you can register and login.</p>
        <p>Along with this you can also</p>

        <p>Check out the <a href="https://github.com/JRusso64/Forum" target="_blank" rel="noopener noreferrer">GitHub repository</a> for more details on the project.</p>
        
        <a href="https://www.linkedin.com/in/john-russo-993435255/" target="_blank" rel="noopener noreferrer">
          <Image src={LinkedInLogo} width={32} height={32}alt="LinkedIn Profile" />
        </a> 

        <p>Technologies Used</p>
        <ul>
          <li>Javascript</li>
          <li>Nodejs</li>
          <li>Express</li>
          <li>PassportJS</li>
          <li>HTML/CSS</li>
          <li>MongoDB Atlas</li>
          <li>Mongoose</li>
          <li>Boostrap</li>
        </ul>
        
        <p>Here are some photos of the what the website looks like.</p>
        
        <h1>Login Page</h1>
        <div style={{ marginBottom: '20px' }}>
            <Image src={LoginPhoto} alt="ASLingo Image" style={{ width: '100%', maxHeight: '100%', objectFit: 'cover' }} />
        </div>

        <h1>Register Page</h1>
        <div style={{ marginBottom: '20px' }}>
            <Image src={RegisterPhoto} alt="ASLingo Image" style={{ width: '100%', maxHeight: '100%', objectFit: 'cover' }} />
        </div>

        
        <h1>Posts Page</h1>
        <div style={{ marginBottom: '20px' }}>
            <Image src={PostsPhoto} alt="ASLingo Image" style={{ width: '100%', maxHeight: '100%', objectFit: 'cover' }} />
        </div>
    </>
  );
}
