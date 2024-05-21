import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Resume() {
  return (
    <div className="flex justify-center items-center h-screen">
      <iframe
        src="/Resume-JohnRusso.pdf"
        className="w-full h-full"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
}