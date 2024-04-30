import React from 'react';
import Link from 'next/link';

export default function Projects() {
  return (
    <ul className="list-none list-inside">
      <li><Link legacyBehavior href="/asl-ingo" passHref><a className="text-blue-600 hover:underline">ASLingo</a></Link></li>
      <li><Link legacyBehavior href="/forum-website" passHref><a className="text-blue-600 hover:underline">Forum Website</a></Link></li>
      <li><Link legacyBehavior href="/personalized-text-messenger" passHref><a className="text-blue-600 hover:underline">Personalized Text Messenger</a></Link></li>
      <li><Link legacyBehavior href="/photo-album-app" passHref><a className="text-blue-600 hover:underline">Photo Album App</a></Link></li>
    </ul>
  );
}
