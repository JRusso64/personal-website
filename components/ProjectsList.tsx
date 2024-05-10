import React from 'react';
import Link from 'next/link';

export default function Projects() {
  return (
    <ul className="list-none list-inside">
      <li><Link legacyBehavior href="/projects/aslingo" passHref><a className="text-blue-600 hover:underline">ASLingo</a></Link></li>
      <li><Link legacyBehavior href="/projects/forum-website" passHref><a className="text-blue-600 hover:underline">Forum Website</a></Link></li>
      <li><Link legacyBehavior href="/projects/personalized-text-messenger" passHref><a className="text-blue-600 hover:underline">Personalized Text Messenger</a></Link></li>
      <li><Link legacyBehavior href="/projects/photo-album-app" passHref><a className="text-blue-600 hover:underline">Photo Album App</a></Link></li>
    </ul>
  );
}
