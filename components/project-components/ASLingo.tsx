import React from 'react';
import Link from 'next/link';

export default function ASLingo() {
  return (
    <>
        <h1>ASLingo</h1> 
        <p>ASLingo is a project that my team and I made at HackRU a hackathon hosted by Rutgers University.</p>
        <p>This is a teaching tool that allows for the user to spell out words letter by letter.</p>
        <p>This project uses a neural network that we gathered data for ourselves. We used googles teachable machine to train our model.</p>
        <p>Python was the language that we used for the software and for the gui we used pyqt. This project one us first place at the Hackathon and was a very rewarding experience.</p>
        <p>I learned a lot from this experience and this was the first time I was able to make something that could actually be used in the real world.</p>

        {/* Add images for the project and a link to the github */}
    </>
  );
}
