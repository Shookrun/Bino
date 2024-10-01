import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-3">
        <img src="../../public/logo.svg" alt="" />
        <h1 className="font-bold text-4xl tracking-wide">BINO</h1>
      </div>
      <div className="flex items-center gap-5 border-r-2 pr-4 border-black">
        <a href="#" className="navBtn">HOME</a>
        <a href="#" className="navBtn">SERVICES</a>
        <a href="#" className="navBtn">PAGES</a>
        <a href="#" className="navBtn">PORTFOLIO</a>
        <a href="#" className="navBtn">NEWS</a>
      </div>
      <div className="bg-black py-2 px-4 rounded-md text-white cursor-pointer border-2 border-black transition-all duration-300  hover:bg-transparent hover:text-black ">
        <h2>LET`S TALK</h2>
      </div>
    </div>
  );
};

export default Navbar;
