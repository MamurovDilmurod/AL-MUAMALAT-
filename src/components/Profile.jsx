import React from 'react';
import ozim from '../img/ozim.jpg';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div className="max-w-[1320px] px-6 py-12 mx-auto ">
            {/* Navigation */}
            <div className="flex gap-4 pb-4">
                <button className="px-7 py-2 rounded-lg bg-[#009688] text-white font-normal shadow-md hover:bg-[#007f6b] transition">
                    Profile
                </button>
                <Link to={'/courses'}>
                    <button className="px-7 py-2 rounded-lg bg-[#009688] text-white font-normal shadow-md hover:bg-[#007f6b] transition">
                        Courses
                    </button>
                </Link>
            </div>


            <div className="overflow-hidden bg-white shadow-xl rounded-3xl">
                {/* Header */}
                <div className="flex flex-col items-center justify-between px-10 py-8 bg-gradient-to-r from-blue-600 to-teal-500 md:flex-row">
                    <div className="flex items-center gap-6">
                        <img
                            src={ozim}
                            alt="profile"
                            className="object-cover w-24 h-24 rounded-full shadow-lg ring-4 ring-white"
                        />
                        <div>
                            <h1 className="text-2xl font-bold text-white">Dilmurod <br /> Mamurov</h1>
                        </div>
                    </div>
                    <button className="px-6 py-2 mt-6 font-semibold text-blue-600 transition bg-white rounded-full md:mt-0 hover:bg-blue-100">
                        Save Profile
                    </button>
                </div>



                {/* Form */}
                <div className="grid gap-10 p-10 md:grid-cols-2">
                    <div className="space-y-6">
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">First Name</label>
                            <input
                                type="text"
                                placeholder="Your first name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Last Name</label>
                            <input
                                type="text"
                                placeholder="Your last name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Address</label>
                            <input
                                type="text"
                                placeholder="Your address"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Birthday</label>
                            <input
                                type="date"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
