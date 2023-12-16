import React from 'react';
import { Link } from 'react-router-dom';

const WinModal = ({ point, closeWinModal }) => {
  return (
    <div className="fixed w-screen h-screen z-50">
      <button
        className="fixed w-full h-full bg-black bg-opacity-50 z-40"
        onClick={closeWinModal}
      ></button>
      <div className="w-full h-full fixed flex justify-center items-center z-50">
        <div className="bg-white w-64 h-52 rounded-xl px-6 py-5 relative flex justify-between items-center flex-col">
          <Link
            className="absolute top-0 right-3 text-gray-300"
            onClick={closeWinModal}
            to="/selectmode"
          >
            x
          </Link>
          <div className="bg-primary px-3 py-2 rounded-3xl">You're welcome</div>
          <h2>You get</h2>
          <h1 className="text-2xl">{point} !!</h1>
        </div>
      </div>
    </div>
  );
};

export default WinModal;
