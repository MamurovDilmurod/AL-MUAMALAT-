import React from 'react';
import Sample from '../img/Sample.png';
import Sample2 from '../img/Sample2.png';
import { FaStar } from 'react-icons/fa';
import { LuArrowUpRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Course = () => {
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
        {
            img: Sample,
            title: 'Various versions have evolved...',
            category: 'Design',
            rating: 5,
            reviews: 20,
            price: '$500',
        },
    ];

    return (
        <div className='max-w-[1320px] mx-auto px-8'>
            <Link to={'/profile'}>  <button className="px-7 py-2 ml-4 rounded-lg bg-[#009688] text-white font-normal shadow-md hover:bg-[#007f6b] transition">
                Profile
            </button></Link>
            <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-3 ">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="relative p-4 transition-all bg-white border shadow rounded-xl hover:shadow-lg"
                    >
                        <span className="absolute px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full top-4 left-4">
                            {course.category}
                        </span>
                        <img
                            src={course.img}
                            alt="Course"
                            className="object-cover w-full h-48 mb-4 rounded-lg"
                        />
                        <h3 className="mb-2 text-base font-semibold text-gray-800 line-clamp-2">
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
                                <LuArrowUpRight className="text-xl" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;
