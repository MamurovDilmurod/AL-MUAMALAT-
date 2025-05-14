import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import { LuArrowUpRight } from 'react-icons/lu';
import Sample from '../img/Sample.png';
import Sample2 from '../img/Sample2.png';
import true1 from '../img/Vector.png';
import nuqta2 from '../img/nuqta2.png';

const courses = [
    {
        img: Sample,
        title: 'Various versions have evolved...',
        category: 'Design',
        rating: 5,
        reviews: 20,
        price: '$500',
    },
    {
        img: Sample2,
        title: 'Various versions have evolved...',
        category: 'Business',
        rating: 5,
        reviews: 102,
        price: '$500',
    },
    {
        img: Sample2,
        title: 'Various versions have evolved...',
        category: 'Business',
        rating: 4,
        reviews: 102,
        price: '$500',
    },
    {
        img: Sample,
        title: 'Various versions have evolved...',
        category: 'Business',
        rating: 4,
        reviews: 102,
        price: '$500',
    },
    {
        img: Sample2,
        title: 'Various versions have evolved...',
        category: 'Business',
        rating: 4,
        reviews: 102,
        price: '$500',
    },

];

function MostPopularSlider() {
    return (
        <div className="py-10 px-4 max-w-[1320px] mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 md:text-4xl">
                Most Popular Courses
            </h2>
            <p className="py-4 text-center text-gray-600 md:text-lg">
                Discover trending courses to boost your skills in Islamic finance
            </p>

            <Swiper
                spaceBetween={70}
                slidesPerView={1}
                // navigation
                loop={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {courses.map((course, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative p-4 overflow-hidden transition-all bg-white border shadow-md rounded-xl hover:shadow-lg">
                            <span className="absolute px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-full top-6 left-6">
                                {course.category}
                            </span>

                            <img src={course.img} alt="Course" className="rounded-lg w-full h-[210px] object-cover mb-4" />

                            <h3 className="mb-2 text-base font-semibold text-gray-800 truncate">
                                {course.title}
                            </h3>

                            <div className="flex items-center gap-1 mb-2 text-yellow-400">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={i < course.rating ? 'text-[#FFC27A]' : 'text-gray-300'}
                                    />
                                ))}
                                <span className="ml-2 text-sm text-gray-500">({course.reviews})</span>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <p className="text-lg font-bold text-gray-800">{course.price}</p>
                                <button className="p-2 text-white bg-teal-500 rounded-full hover:bg-teal-600">
                                    <LuArrowUpRight className='text-2xl' />
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Keyingi qisim */}
            <div className="flex flex-wrap min-h-screen p-10 pt-24 lg:flex-nowrap">
                {/* Our Services */}
                <div className="w-full lg:w-1/2 bg-[#009688] text-white p-8  shadow-lg flex flex-col gap-6 justify-between">
                    <div>
                        <h2 className="mb-6 text-3xl font-bold text-center">Our Services</h2>

                        {[1, 2, 3].map((_, index) => (
                            <div key={index} className="flex items-start gap-4 mb-4">
                                <img src={true1} alt="check" className="w-6 h-6 mt-1" />
                                <p>
                                    <span className="block mb-1 text-lg font-semibold">Space for creative ideas</span>
                                    Cyber Square nourishes young aspiring minds to get a clear vision of their ideas. We guide them in analyzing and building their vision and ideas into reality.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment */}
                <div className="flex flex-col justify-between w-full p-12 bg-white shadow-lg lg:w-1/2 ">
                    <div>
                        <h2 className="text-3xl font-bold text-[#000000] text-center mb-6">Payment</h2>

                        <div className="flex flex-col gap-4">
                            {[...Array(7)].map((_, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <img src={nuqta2} alt="dot" className="w-4 h-4 mt-1" />
                                    <p className="text-sm text-gray-700">Space for creative ideas</p>
                                </div>
                            ))}
                        </div>
                        <button className="bg-[#009688] hover:bg-[#00796b] text-white px-12 py-2 text-lg mt-10 rounded-lg shadow-md transition-all duration-300">
                            Purchase
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MostPopularSlider;
