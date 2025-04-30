import React from 'react';
import home1 from '../img/home1.png';
import star1 from '../img/star1.png';

function Header() {
    return (
        <div className="w-full bg-primary px-4 sm:px-6 md:px-8 lg:px-12 py-12">
            <div className="max-w-[1320px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between">

                {/* Left side */}
                <div className="text-center md:text-left flex-1 animate-fadeInUp">
                    <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-snug sm:leading-tight">
                        Enhance Your <br /> Understanding of Islamic <br /> Ethics with Al-Muamalat
                    </h1>
                    <button className="mt-8 bg-yellow text-white hover:bg-yellow-600 hover:text-white transition-all duration-300 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105">
                        Students’ Opinion
                    </button>
                </div>

                {/* Right side */}
                <div className="mb-8 md:mb-0 flex-1 flex justify-center animate-fadeInUp" style={{
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
