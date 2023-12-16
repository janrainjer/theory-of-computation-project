import React from 'react';

const Reloading = () => {
  return (
    <div className="fixed w-screen h-screen z-50">
      <div className="w-full h-full fixed bg-black bg-opacity-50 flex justify-center items-center text-white text-3xl">
        Loading...
      </div>
    </div>
  );
};

export default Reloading;
