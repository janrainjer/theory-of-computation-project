import React from 'react';
import { Link } from 'react-router-dom';
import bee2 from '../assets/bee2.png';
import bee3 from '../assets/bee3.png';

const SelectMode = () => {
  const mode = [
    {
      title: '5',
      path: '/gameplay/5',
    },
    {
      title: '10',
      path: '/gameplay/10',
    },
    {
      title: '15',
      path: '/gameplay/15',
    },
  ];
  return (
    <div className="w-screen h-screen bg-main-bg bg-no-repeat bg-cover bg-center">
      <div className="fixed w-full h-16 justify-center items-center bg-primary flex md:text-2xl text-base font-bold md:px-16 px-3">
        <div>
          <Link className="text-base" to="/">
            {'<'}
          </Link>
        </div>
        <div className="flex-grow flex justify-center items-center">
          How many word do you want to play?
        </div>
      </div>
      <div className="md:pt-80 pt-32 w-full flex justify-center items-center text-white">
        <div className="flex md:flex-row flex-col justify-between items-center md:gap-x-20 gap-y-4">
          <img src={bee2} alt="bee2" className="md:h-fit h-24" />
          {mode.map((item, index) => (
            <Link
              className="rounded-full  bg-white border-primary border-2 md:w-28 md:h-28 w-14 h-14 flex justify-center items-center text-black font-bold md:text-2xl text-lg"
              key={index}
              to={item.path}
            >
              {item.title}
            </Link>
          ))}
          <img src={bee3} alt="bee3" className="md:pt-40 h-32 md:h-fit " />
        </div>
      </div>
    </div>
  );
};

export default SelectMode;
