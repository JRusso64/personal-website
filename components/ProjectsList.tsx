import React from 'react';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="flex flex-col items-center pt-20 px-4">
      <p className="text-2xl mb-6 text-center">List of the projects that I have worked on.<br></br> Click on one for more information.</p>
      <p className="text-2xl text-center">Main Projects</p>
      <ul className="list-none list-inside text-lg space-y-4 text-center">
        <li><Link legacyBehavior href="/projects/aslingo" passHref><a className="text-blue-600 hover:underline">ASLingo</a></Link></li>
        <li><Link legacyBehavior href="/projects/forum-website" passHref><a className="text-blue-600 hover:underline">Forum Website</a></Link></li>
        <li><Link legacyBehavior href="/projects/personalized-text-messenger" passHref><a className="text-blue-600 hover:underline">Personalized Text Messenger</a></Link></li>
      </ul>

      <p className="text-2xl text-center">Smaller Projects I've Worked On</p>
      <ul className="list-none list-inside text-lg space-y-4 text-center">
        <li><Link legacyBehavior href="/projects/photo-album-app" passHref><a className="text-blue-600 hover:underline">Photo Album App</a></Link></li>
        <li><Link legacyBehavior href="/projects/photo-album-android" passHref><a className="text-blue-600 hover:underline">Photo Album App Ported to Android</a></Link></li>
      </ul>
    </div>
  );
}
