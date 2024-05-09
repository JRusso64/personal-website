import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <h1>About Me</h1>
      <p>Hello! My name is <strong>John Russo</strong>, and I'm currently a senior studying Computer Science at Rutgers University, with an expected graduation in January. I'm deeply passionate about technology and coding, particularly in the areas of software development and machine learning.</p>
      <p>Throughout my time at Rutgers, I've been involved in several projects, including developing a mobile app that helps users track their fitness progress and a web-based application that simplifies event planning. These experiences have helped hone my skills in Python, JavaScript, and React, and have fueled my interest in creating tools that enhance everyday life.</p>
      <p>When I'm not coding, I enjoy practicing Brazilian Jiu-Jitsu (BJJ), which challenges me physically and mentally, providing a great balance to my academic interests. It's also a fantastic way to stay disciplined and focused, qualities that translate well into my coding projects.</p>
      <p>I am always eager to learn more and am on the lookout for new opportunities and challenges. Feel free to check out my <Link legacyBehavior href="/projects"><a> projects page</a></Link> to see what I've been working on or my <a href="https://www.linkedin.com/in/john-russo-993435255/">LinkedIn</a> if you want to connect!</p>
    </>
  );
}
