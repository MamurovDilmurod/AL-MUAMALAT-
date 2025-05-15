import React, { useState } from 'react';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("ENG");
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu


    const handleSelect = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };
    const toggleDropdown = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between py-4 px-6 max-w-[1320px] mx-auto">
            {/* Logo and Home Link */}
            <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="logo" className="h-8" />
                <h3 className="text-sm font-bold text-primary md:text-xl">AL MUAMALAT</h3>
            </Link>

            {/* Desktop Menu */}
            <ul className="items-center hidden gap-8 md:flex">
                <Link to="/" className="text-sm font-semibold cursor-pointer hover:text-primary">Home</Link>

                <li className="relative">
                    <div
                        className="flex items-center gap-1 text-sm font-semibold cursor-pointer hover:text-primary"
                        onClick={toggleDropdown}
                    >
                        Programs
                        <svg
                            className={`w-4 h-4 transform transition-transform ${isOpen1 ? 'rotate-180' : 'rotate-0'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>

                    {isOpen1 && (
                        <ul className="absolute w-48 py-2 mt-2 bg-white rounded-md shadow-lg">
                            <Link to={'/InternationalEducationalPrograms'}>
                                <li className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-primary hover:text-white">
                                    International educational programs
                                </li>
                            </Link>
                            <li className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-primary hover:text-white">
                                Specialized courses
                            </li>
                            <li className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-primary hover:text-white">
                                Islamic Finance Literacy Course
                            </li>
                            <li className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-primary hover:text-white">
                                Certification program
                            </li>
                        </ul>
                    )}
                </li>

                <li className="text-sm font-semibold cursor-pointer hover:text-primary">Finance tools</li>
                <Link to={'contact'} className="text-sm font-semibold cursor-pointer hover:text-primary">Contact</Link>
            </ul>

            {/* Language Selection */}
            <div className='hidden md:block'>
                <div className="flex items-center gap-6">
                    <div className="relative inline-block text-left">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center px-4 py-2 space-x-2 text-sm font-semibold bg-transparent border border-gray-300 rounded-md cursor-pointer"
                        >
                            <span>{selectedLanguage}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {isOpen && (
                            <div className="absolute right-0 z-10 hidden w-40 mt-2 bg-white border border-gray-300 rounded-md shadow-lg md:block">
                                <div
                                    onClick={() => handleSelect("ENG")}
                                    className="px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-gray-100"
                                >
                                    ENG
                                </div>
                                <div
                                    onClick={() => handleSelect("UZB")}
                                    className="px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-gray-100"
                                >
                                    UZB
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sign in button */}
                    <Link to={'/login'}>
                        <button className="hidden py-2 text-white transition duration-300 rounded bg-primary px-7 hover:bg-primary-dark md:block">
                            Sign in
                        </button>
                    </Link>
                    {/* Profile button */}
                    <Link to="/profile">
                        <button
                            type="button"
                            className="items-center hidden gap-2 px-4 py-2 text-white transition duration-300 bg-purple-700 rounded md:flex hover:bg-purple-800"
                        >
                            <CgProfile className="w-6 h-6" />
                            <span>Profil</span>
                        </button>
                    </Link>

                </div>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMobileMenu}
                className="text-2xl md:hidden text-primary"
            >
                {isMobileMenuOpen ? 'X' : '☰'}
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute left-0 right-0 p-4 bg-white shadow-md md:hidden top-16">
                    <ul className="space-y-4">
                        <li className="text-sm font-semibold cursor-pointer hover:text-primary">Home</li>
                        <li className="relative">
                            <div
                                className="flex items-center gap-1 text-sm font-semibold cursor-pointer hover:text-primary"
                                onClick={toggleDropdown}
                            >
                                Programs
                                <svg
                                    className={`w-4 h-4 transform transition-transform ${isOpen1 ? 'rotate-180' : 'rotate-0'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>

                            {isOpen1 && (
                                <ul className="absolute w-48 py-2 mt-2 bg-white rounded-md shadow-lg">
                                    <Link to={'/InternationalEducationalPrograms'}>
                                        <li className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-primary hover:text-white">
                                            International educational programs
                                        </li>
                                    </Link>
                                    <li className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-primary hover:text-white">
                                        Specialized courses
                                    </li>
                                    <li className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-primary hover:text-white">
                                        Islamic Finance Literacy Course
                                    </li>
                                    <li className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-primary hover:text-white">
                                        Certification program
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="text-sm font-semibold cursor-pointer hover:text-primary">Finance tools</li>
                        <Link to={'/contact'} className="text-sm font-semibold cursor-pointer hover:text-primary">Contact</Link>
                        <li>
                            <Link to={'/login'}>
                                <button className="w-full py-2 text-white transition duration-300 rounded bg-primary px-7 hover:bg-primary-dark">
                                    Sign in
                                </button>
                            </Link>
                        </li>
                    </ul>
                    <Link to="/profile">
                        <button
                            type="button"
                            className="relative flex items-center justify-center w-full gap-2 px-4 py-2 text-white transition duration-300 bg-purple-700 rounded top-2 hover:bg-purple-800 md:hidden"
                        >
                            <CgProfile className="w-6 h-6" />
                            <span>Profil</span>
                        </button>
                    </Link>

                </div>
            )}
        </nav>
    );
}

export default Navbar;
