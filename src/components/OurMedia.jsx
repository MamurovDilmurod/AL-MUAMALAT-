import React, { useState } from 'react';
import ourmedia from '../img/ourmedia.png';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { FaPlayCircle } from "react-icons/fa";

// Fake data - xuddi backenddan kelgandek
const mediaData = [
    { id: 1, title: "Why Islamic finance?", img: ourmedia },
    { id: 2, title: "Halal Investment Tips", img: ourmedia },
    { id: 3, title: "Our Vision & Mission", img: ourmedia },
    { id: 4, title: "Success Stories", img: ourmedia },
    { id: 5, title: "Interview with CEO", img: ourmedia },
];

function OurMedia() {
    const [startIndex, setStartIndex] = useState(0); // current start index

    const handleNext = () => {
        if (startIndex + 3 < mediaData.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const visibleMedia = mediaData.slice(startIndex, startIndex + 3);

    return (
        <div className='px-4 py-10 bg-white md:px-16'>
            {/* Title */}
            <h2 className='mb-2 text-2xl font-bold text-center md:text-4xl'>Our Media</h2>
            <p className='mb-8 text-center text-gray-600'>
                Our team consists of seasoned professionals with extensive experience<br className='hidden md:block' />
                in Islamic finance and management. Each member brings a unique set of <br className='hidden md:block' />
                skills and expertise.
            </p>

            {/* Top Navigation */}
            <div className='flex items-center justify-between mb-6'>
                <h3 className='text-xl font-bold md:text-3xl'>Our media showcase</h3>
                <div className='flex gap-4 text-xl'>
                    <button
                        onClick={handlePrev}
                        className='p-2 rounded-full border border-[#009688] text-[#009688] hover:bg-[#009688] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#009688] focus:ring-offset-2 transition disabled:opacity-30 disabled:cursor-not-allowed'
                        disabled={startIndex === 0}
                    >
                        <AiOutlineArrowLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className='p-2 rounded-full border border-[#009688] text-[#009688] hover:bg-[#009688] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#009688] focus:ring-offset-2 transition disabled:opacity-30 disabled:cursor-not-allowed'
                        disabled={startIndex + 3 >= mediaData.length}
                    >
                        <AiOutlineArrowRight />
                    </button>
                </div>

            </div>

            {/* Media Cards */}
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
                {visibleMedia.map((media) => (
                    <div key={media.id} className='relative overflow-hidden transition rounded-lg shadow-md group hover:shadow-xl'>
                        <div
                            className='flex items-center justify-center w-full gap-12 pt-80 bg-center bg-cover h-80 md:h-[450px]'
                            style={{
                                backgroundImage: `url(${media.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                filter: 'brightness(0.9)',

                            }}
                        >
                            <p className='text-xl font-bold text-white max-w-48'>{media.title}</p>
                            <FaPlayCircle className='text-5xl text-white transition duration-300 transform rounded opacity-80 group-hover:scale-110 hover:text-[#2198FF] hover:bg-text-white cursor-pointer ' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurMedia;
