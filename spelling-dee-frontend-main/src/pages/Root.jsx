import React from 'react';
import bee from '../assets/bee.png';
import { Link } from 'react-router-dom';

function Root() {
  return (
    <div className="flex justify-center min-h-screen w-screen items-center bg-main-bg text-white bg-no-repeat bg-center bg-cover">
      <div className="flex items-center w-full flex-wrap-reverse my-10">
        <div className="lg:pl-32 md:pl-16 px-8 sm:w-[60%] font-Poppins">
          <h1 className="text-[#FFD747] font-bold mb-10 lg:text-3xl md:text-2xl text-xl">
            SPELLING DEE DA VINCI CODE
          </h1>
          <h3 className="text-[#FFD747] font-bold mb-5 md:text-xl ">
            Proved By
          </h3>
          <h1 className="text-white font-bold mb-5 lg:text-5xl md:text-4xl  text-lg">
            Theory of Comedy
          </h1>
          <p className="text-white font-normal mb-24 md:text-base text-xs pr-5">
            01076121 Theory of Computation Assignment an Application of Regular
            Expression Computer Engineering, KMITL
          </p>
          <div className="flex justify-start items-center gap-x-3">
            <Link
              className="py-2 px-5 bg-[#FFD747] rounded-xl text-black md:text-base text-xs h-10 flex justify-center items-center"
              to="/selectmode"
            >
              Get start
            </Link>
            <a
              className="py-2 px-5 bg-white rounded-xl text-black md:text-base text-xs flex gap-x-1 justify-center items-center  h-10"
              to="/selectmode"
              href="https://github.com/theory-of-comedy"
              target="_blank"
            >
              <span>
                <img
                  src="https://pngimg.com/d/github_PNG58.png"
                  className="h-6 w-6"
                />
              </span>
              <div className="whitespace-nowrap">Source code</div>
            </a>
          </div>
        </div>
        <div className="sm:w-[40%] md:pl-0 pl-5">
          <img src={bee} alt="" className="w-full md:h-full h-56" />
        </div>
      </div>
    </div>
  );
}

export default Root;
