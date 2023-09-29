import React from "react";
import Strip from "./Strip";
import { NavLink } from "react-router-dom";

function Navbar() {

  const handleClick = () => {
    document.getElementById("container").classList.toggle("activeNav")
  }
  return (
    <>
      <div className="sticky top-0 z-50 bg-white w-[100vw] flex flex-row justify-between px-[10vw] h-[10vh] sm:px-[4vw] max-[620px]:px-[2vw] items-center">
        <div className="absolute left-[-6vw] top-[-3vw] w-[15vw] h-[12vw] blur-[5vw] bg-[#DCE7FD] rounded-full -z-[10]"></div>
        <div onClick={handleClick} className="absolute right-12 top-[2vh] p-1 border border-[#83878C] rounded-md min-[550px]:hidden">
          <img src="/assets/hamburger.svg" className="h-[5vh]" />
        </div>
        <h2 className="text-[#711755] text-[1.6em] font-bold m-0 max-[550px]:ml-[5vw]">
          <NavLink to={"/"}>50Chats</NavLink>
        </h2>
        <div id="container" className="activeNav w-[60vw] flex justify-between items-center max-md:w-[75vw] max-[550px]:flex-col max-[550px]:absolute max-[550px]:top-[10vh] max-[550px]:left-0 max-[550px]:w-[100vw] ">
          <ul className="list-none w-[40vw] flex justify-around text-[#51575E] text-[1.2em] max-[550px]:flex-col max-[550px]:bg-[#fff] max-[550px]:space-y-3 max-[550px]:w-[100vw] max-[550px]:items-center">
            <li className="sm:inline border-b-2 border-[#fff] hover:border-[#705CF6]">
              <NavLink to={"/"}>Pricing</NavLink>
            </li>
            <li className="sm:inline hover:border-b-2 hover:border-[#705CF6]">
              <NavLink to={"/"}>Features</NavLink>
            </li>
            <li className="sm:inline hover:border-b-2 hover:border-[#705CF6]">
              <NavLink to={"/"}>FAQs</NavLink>
            </li>
            <li className="sm:inline hover:border-b-2 hover:border-[#705CF6]">
              <NavLink to={"/help"}>Help</NavLink>
            </li>
          </ul>
          <div className=" text-[#51575E] text-[1.2em] max-[550px]:flex max-[550px]:bg-[#fff] max-[550px]:w-[100vw] max-[550px]:justify-center max-[550px]:py-[2vh]">
            <button className="mr-6">Sign in</button>
            <button className="border border-[#83878C] p-2 rounded-md">Sign Up</button>
          </div>
        </div>
        <div className="absolute right-[10vw] top-[-8vw] w-[12vw] h-[12vw] blur-[8vw] bg-[#283783] -z-[10] rounded-full"></div>
      </div>
    </>
  );
}

export default Navbar;
