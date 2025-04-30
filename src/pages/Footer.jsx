import React from 'react'
import footerimg from '../img/footerimg.png'
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
    return (
        <footer className='bg-[#009688] text-white py-10'>
            <div className='flex flex-col items-center justify-center gap-10'>
                {/* Logo qismi */}
                <div className='flex items-center gap-2'>
                    <img src={footerimg} alt="Footer Logo" className='object-contain w-10 h-10' />
                    <h2 className='text-2xl font-bold leading-6'>Dior <br /> design</h2>
                </div>

                {/* Navigatsiya linklar */}
                <ul className='flex flex-wrap justify-center gap-7'>
                    {["Home", "About", "Services", "Contact Us"].map((item, index) => (
                        <li
                            key={index}
                            className='text-lg transition duration-300 cursor-pointer hover:text-black hover:scale-110'
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Ijtimoiy tarmoqlar ikonlari */}
                <div className='flex gap-5 text-2xl'>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                        className='transition duration-300 hover:text-red-600 hover:scale-110'>
                        <FaYoutube />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                        className='transition duration-300 hover:text-blue-600 hover:scale-110'>
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                        className='transition duration-300 hover:text-black hover:scale-110'>
                        <CiTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                        className='transition duration-300 hover:text-pink-600 hover:scale-110'>
                        <FaInstagram />
                    </a>
                </div>
            </div>

            {/* Chiziq */}
            <hr className='border-white max-w-[1320px] mx-auto mt-10' />
        </footer>
    )
}

export default Footer
