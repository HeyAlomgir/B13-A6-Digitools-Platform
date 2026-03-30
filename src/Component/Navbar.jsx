import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <div className='shadow-sm my-5'>
                <div className="navbar bg-base-100  container mx-auto ">
  <div className="navbar-start">
    <div className="dropdown  ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow ">
                <li><a href="#">Products</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing </a></li>
                <li><a href="#">Pricing </a></li>
                <li><a href="#">Pricing </a></li>
                <li><a href="#">FAQ     </a></li>
      </ul>
    </div>
     <h1 className='text-xl md:text-4xl font-bold text-[#4F39F6]'>DigiTools</h1>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 gap-5 text-xl font-bold">
                <li><a href="#">Products</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing </a></li>
                <li><a href="#">Pricing </a></li>
                <li><a href="#">Pricing </a></li>
                <li><a href="#">FAQ     </a></li>
    </ul>
  </div>
  <div className="navbar-end">
        <div className=' flex items-center gap-3'>
            <h2 className='text-2xl'><FaCartPlus></FaCartPlus></h2>
            <p className='text-xl font-bold'>Login</p>

            <button className=' bg-[#4F39F6] text-xl md:text-3xl p-4 rounded-full text-white'>Get Started</button>
        </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Navbar;