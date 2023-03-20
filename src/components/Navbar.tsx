import React from "react";

const Navbar:React.FC = () => {
  return(
    <>
    <div className="navbar w-auto h-20  flex justify-between items-center">
        <div className="logo ml-5 lg:ml-20 text-white font-medium  text-sm lg:text-xl  bg-gradient-to-r from-sky-500 to to-indigo-500 px-2 py-3 rounded-md">
            {/* <h2>Daniel Adrian Gendik</h2> */}
        </div>

        <div className="nav h-full mr-20">
        <nav className="flex gap-5  text-white text-lg font-medium h-full w-full items-center">
            <a href="#" className="hover:text-sky-500 duration-200">About</a>
            <a href="#" className="hover:text-sky-500 duration-200">Projects</a>
            <a href="#" className="bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-3 rounded-md">Contact</a>
        </nav>
        </div>

    </div>
    
    </>
  )
};

export default Navbar;
