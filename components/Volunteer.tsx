import React from 'react';
import Link from 'next/link';

const Volunteer = () => {
  return (
 

    <div
      className="relative h-[350px] w-full bg-cover bg-center flex items-center justify-center"
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
          href="/contact" // Replace with your actual route
          className="btn btn-secondary btn-md text-white"
        >
          Donate
        </Link>
      </div>
    </div>
  );
};

export default Volunteer;
