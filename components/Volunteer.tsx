import React from 'react';

const Volunteer = () => {
  return (
    <div 
      className="relative h-[400px] w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/9968380/pexels-photo-9968380.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <button className="btn btn-primary">
        Volunteer Now
      </button>
    </div>
  );
};

export default Volunteer;
