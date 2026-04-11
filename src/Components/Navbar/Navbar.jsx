import React from 'react';
import heroImg from "../../../Mission-Restart-A3/assets/logo.png"
import { NavLink } from 'react-router';
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className='bg-white shadow-md '>
            <div className=" w-11/12 mx-auto navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                             <NavLink to="/" 
                            className={({isActive})=>isActive?"active":""}>Home</NavLink>
                            <NavLink to="/apps"
                            className={({isActive})=>isActive?"active":""} >Apps</NavLink>
                            <NavLink to="/installation"
                            >Installation</NavLink>

                        </ul>
                    </div>
                    <div className="flex gap-1 items-center">
                        <img src={heroImg} alt="" className='w-[80px] h-[80px]' />
                        <h2 className='text-4xl font-bold text-violet-500'>HERO.IO</h2>
                    </div>
                </div>
                <div className="navbar-center  hidden lg:flex gap-3 ">
                    <NavLink to="/" 
                    className={({isActive})=>isActive?"active":""}>Home</NavLink>
                    <NavLink to="/apps"
                     className={({isActive})=>isActive?"active":""} >Apps</NavLink>
                    <NavLink to="/installation"
                    >Installation</NavLink>
                </div>
                <div className="navbar-end ">
                    <button onClick={() => window.open("https://github.com/tonmoyprogrammer/My-Apps-House")}
                        className=' items-center gap-2 hidden lg:flex
                     bg-gradient-to-r from-[#7F56D9] to-[#AD7BFF] text-white px-6 py-2 rounded-lg 
                    font-semibold shadow-md hover:opacity-90 transition-all'>
                        <img src="https://i.ibb.co.com/4RWW1bHP/Git-Hub-Invertocat-Logo-svg.png"
                            className='w-[20px] h-[20px] rounded-xl' alt="" />
                        <span>Contribute</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;