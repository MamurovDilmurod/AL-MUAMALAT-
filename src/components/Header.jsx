import React from 'react';
import home1 from '../img/home1.png';
import star1 from '../img/star1.png';

function Header() {
    return (
        <div className="w-full px-4 bg-primary sm:px-6 md:px-8 lg:px-12 ">
            <div className="max-w-[1320px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between">

                {/* Left side */}
                <div className="flex-1 text-center md:text-left animate-fadeInUp">
                    <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-snug sm:leading-tight">
                        Enhance Your <br /> Understanding of Islamic <br /> Ethics with Al-Muamalat
                    </h1>
                    <button className="px-6 py-3 mt-8 font-semibold text-white transition-all duration-300 rounded-lg shadow-md bg-yellow hover:bg-yellow-600 hover:text-white sm:px-8 sm:py-4 hover:shadow-lg hover:scale-105">
                        Students’ Opinion
                    </button>
                </div>

                {/* Right side */}
                <div className="flex justify-center flex-1 mb-8 md:mb-0 animate-fadeInUp" style={{
                    backgroundImage: `url(${star1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <img
                        src={home1}
                        alt="Home Banner"
                        className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] object-contain"
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
