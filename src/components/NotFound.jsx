import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-700 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-6">Sahifa topilmadi!</p>
            <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Bosh sahifaga qaytish
            </Link>
        </div>
    );
};

export default NotFound;
