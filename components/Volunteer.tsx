import React from 'react';
import Link from 'next/link'


const Volunteer = () => {
  return (
    <div 
      className="relative h-[400px] w-full bg-cover bg-center flex items-center justify-center max-w-7xl"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/9968380/pexels-photo-9968380.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className='space-y-1'>
      <h1 className='text-center text-white font-medium'>Be a part of our mission to change and impact lives </h1>
      <Link href=""  target='_blank' className="btn btn-primary btn-md text-white">
        Join Us
      </Link>

      </div>
    </div>
  );
};

export default Volunteer;
