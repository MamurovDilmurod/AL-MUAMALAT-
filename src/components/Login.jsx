import React from 'react';
import { Link } from 'react-router-dom';
import loginimg from '../img/loginimg.png';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Login() {
    const { register, handleSubmit } = useForm();

    const { mutate, isLoading, error } = useMutation({
        mutationFn: (submitData) => {
            return axios.post('https://api.al-muamalat.uz/api/auth/signin', submitData)
                .then((response) => {
                    console.log(response?.data);
                    localStorage.setItem('testUserToken', response?.data?.data?.tokens?.accessToken);
                });
        },
    });

    const onSubmit = (data) => {
        console.log(data);
        mutate(data);
    };

    return (
        <div className='flex flex-col-reverse items-center justify-center min-h-screen px-4 py-8 lg:flex-row md:px-8 lg:px-16 bg-gray-50'>
            {/* FORM SIDE */}
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'
                >
                    <h2 className='mb-2 text-3xl font-bold text-center text-black sm:text-4xl'>Get started</h2>
                    <h2 className='mb-6 text-xl font-semibold text-center sm:text-2xl'>Sign In</h2>

                    <input
                        {...register("phone_number")}
                        type="text"
                        placeholder="Phone Number"
                        className='w-full p-3 mb-4 border border-[#009688] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009688]'
                    />

                    <input
                        {...register("password")}
                        type="password"
                        placeholder="Password"
                        className='w-full p-3 mb-6 border border-[#009688] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009688]'
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
                        disabled={isLoading}
                    >
                        {isLoading ? "Signing in..." : "Sign In"}
                    </button>

                    {error && <p className="mt-4 text-center text-red-600">Login error occurred.</p>}

                    <div className='mt-4 text-center'>
                        <span className='text-gray-600'>
                            Don't have an account?{' '}
                            <Link to="/register" className='font-semibold text-blue-500 hover:text-blue-600 hover:font-medium'>Sign Up</Link>
                        </span>
                    </div>
                </form>
            </div>

            {/* IMAGE SIDE */}
            <div className='flex flex-col items-center justify-center w-full p-6 mb-8 text-center rounded-lg lg:w-1/2 bg-primary lg:mb-0'>
                <img src={loginimg} alt="Login Banner" className='object-contain w-64 h-64 mb-6 sm:w-80 sm:h-80' />
                <h2 className='text-xl font-bold leading-relaxed text-white sm:text-2xl md:text-3xl'>
                    Welcome to Al Muamalat – <br /> Empowering Your Journey in <br />
                    Islamic Finance
                </h2>
            </div>
        </div>
    );
}

export default Login;
