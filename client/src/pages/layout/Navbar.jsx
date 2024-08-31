import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../assests/logo.png'
import { useAuth } from '../../stors/auth';

const MobileMenu = ({ isLoggedIn, isHamburgerMenuOpen, closeHamburger }) => {
    return (
        <div className={`bg-gray-800 sticky z-3 top-0 pt-10 md:hidden ${isHamburgerMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
                <NavLink to="/" onClick={closeHamburger} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">JobList</NavLink>
                {isLoggedIn ? (
                    <>
                        <NavLink to="/logout" onClick={closeHamburger} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Logout</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to="/register" onClick={closeHamburger} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Register</NavLink>
                        <NavLink to="/login" onClick={closeHamburger} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Login</NavLink>
                    </>
                )}
            </div>
        </div>
    );
};


export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

    const toggleHamburger = () => {
        console.log('Toggling hamburger menu');
        setHamburgerMenuOpen(!isHamburgerMenuOpen);
    };

    const closeHamburger = () => {
        console.log('Closing hamburger menu');
        setHamburgerMenuOpen(false);
    };

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">JobSearch</span>
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        onClick={toggleHamburger}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                        aria-controls="navbar-default"
                        aria-expanded={isHamburgerMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


                            <li>
                                <NavLink to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">JobList</NavLink>
                            </li>
                            {isLoggedIn ? (
                                <>
                                    <li>
                                        <NavLink to="/logout" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Logout</NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to="/register" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Register</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Login</NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            <MobileMenu isLoggedIn={isLoggedIn} isHamburgerMenuOpen={isHamburgerMenuOpen} closeHamburger={closeHamburger} />
        </>
    );
};
