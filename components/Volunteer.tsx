import React from 'react';
import Link from 'next/link';

const Volunteer = () => {
  return (
    <div
      className="relative h-[400px] w-full bg-cover bg-center flex items-center justify-center max-w-7xl mx-auto px-4"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/9968380/pexels-photo-9968380.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-4">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
          Be a part of our mission to change and impact lives
        </h1>
        <Link
          href="/volunteer" // Replace with your actual route
          target="_blank"
          className="inline-block px-6 py-3 bg-yellow-500 text-white font-medium rounded-md shadow-lg hover:bg-yellow-600 transition duration-300"
        >
          Join Us
        </Link>
      </div>
    </div>
  );
};

export default Volunteer;
