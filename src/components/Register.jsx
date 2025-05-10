import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginimg from '../img/loginimg.png';

function Register() {
    const [form, setForm] = useState({ email: '', username: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Registered successfully!');
        console.log(form);
    };

    return (
        <div className='flex justify-between max-w-[1320px] mx-auto px-6 py-12'>
            <div className="flex items-center justify-center w-full md:w-1/2">
                <form
                    onSubmit={handleSubmit}
                    className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'
                >
                    <h2 className='mb-2 text-4xl font-bold text-center text-black'>Get started</h2>
                    <h2 className='mb-6 text-2xl font-semibold text-center'>Sign Up</h2>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className='w-full p-3 mb-4 border border-[#009688] rounded-lg'
                    />

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                        value={form.username}
                        onChange={handleChange}
                        className='w-full p-3 mb-4 border border-[#009688] rounded-lg'
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={form.password}
                        onChange={handleChange}
                        className='w-full p-3 mb-6 border border-[#009688] rounded-lg'
                    />

                    <button
                        type="submit"
                        className='w-full py-3 font-semibold transition-all duration-300 hover:bg-yellow-600'
                        style={{
                            backgroundColor: '#009688',
                            color: 'white',
                            borderRadius: '10px',
                            fontSize: '16px',
                        }}
                    >
                        Sign Up
                    </button>

                    <div className='mt-4 text-center'>
                        <span className='text-gray-600'>
                            Already have an account?{' '}
                            <Link to="/login" className='font-semibold text-blue-500 hover:text-blue-600'>Sign In</Link>
                        </span>
                    </div>
                </form>
            </div>

            <div className='flex flex-col items-center justify-center w-full h-screen p-6 text-center rounded-lg md:w-1/2 bg-primary'>
                <img src={loginimg} alt="Login Banner" className='mb-6 w-96 h-96' />
                <h2 className='text-3xl font-bold text-white'>
                    Welcome to Al Muamalat – <br /> Empowering Your Journey in <br />
                    Islamic Finance
                </h2>
            </div>
        </div>
    );
}

export default Register;
