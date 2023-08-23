import React from "react";

const home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="inline-block">
        <div className="text-gray-300 title1 text-9xl ">
          <span className="text-teal-400 font-bold">H</span>ola
          <span className="text-teal-400 font-bold">!</span>
        </div>
        <div className="text-gray-300 title2 text-8xl">
          Soy <span className="text-teal-400 font-bold">E</span>lías
        </div>
        <div className="title3 text-gray-300 text-7xl">
          Desarrollador <span className="text-teal-400 font-bold">Web</span>
        </div>
      </div>
    </div>
  );
};

export default home;
