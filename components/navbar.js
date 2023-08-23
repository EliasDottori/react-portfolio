import React from "react";

const navbar = () => {
  return (
    <nav className="fixed h-screen w-16 bg-gray-800 box-border flex justify-between items-center">
      <a>
        <div className="w-16 h-16 bg-contain bg-center mt-5 cursor-pointer"></div>
      </a>

      <ul className="flex flex-col justify-around w-auto">
        <a className="text-teal-400 no-underline flex items-center box-border p-4">
          <i className="fa-solid fa-house"></i>
          <span className="ml-5 w-auto whitespace-no-wrap text-gray-300">
            Inicio
          </span>
        </a>
        <a className="text-teal-400 no-underline flex items-center box-border p-4">
          <i className="fa-solid fa-address-card"></i>
          <span className="ml-5 w-auto whitespace-no-wrap text-gray-300">
            Sobre Mi
          </span>
        </a>
        <a className="text-teal-400 no-underline flex items-center box-border p-4">
          <i className="fa-solid fa-code"></i>
          <span className="ml-5 w-auto whitespace-no-wrap text-gray-300">
            Habilidades
          </span>
        </a>
        <a className="text-teal-400 no-underline flex items-center box-border p-4">
          <i className="fa-solid fa-briefcase"></i>
          <span className="ml-5 w-auto whitespace-no-wrap text-gray-300">
            Portfolio
          </span>
        </a>
        <a className="text-teal-400 no-underline flex items-center box-border p-4">
          <i className="fa-solid fa-message"></i>
          <span className="ml-5 w-auto whitespace-no-wrap text-gray-300">
            Contacto
          </span>
        </a>
      </ul>

      <p id="nameNavBar" className="name">
        Elías Dottori
      </p>
    </nav>
  );
};

export default navbar;
