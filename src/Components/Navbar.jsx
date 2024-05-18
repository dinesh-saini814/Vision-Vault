import React from "react";
import { HiOutlineBellAlert } from "react-icons/hi2";

function Navbar() {
  return (
    <div className="fixed top-5 z-10 w-full  bg-secondary flex items-center justify-between px-5 ">
      <div className=" flex gap-14">
        <img className="w-10 " src="src\assets\logo3.png" alt="logo" />
        <button className="w-10 h-10 flex justify-center items-center rounded-[1.05rem] bg-white">
          <HiOutlineBellAlert />
        </button>
      </div>
      <div className=" flex gap-3 items-center">
        <h1 className="font-WorkSans font-medium text-xl">hello jenny</h1>
        <button className="w-10 h-10 flex justify-center items-center rounded-[1.05rem] overflow-hidden bg-white">
          <img className="" src="src\assets\profile1.jpg" alt="logo" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
