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
                })
        },
    });

    const onSubmit = (data) => {
        console.log(data);
        mutate(data);
    };

    return (
        <div className='flex justify-between max-w-[1320px] mx-auto px-6 py-12'>
            <div className="flex items-center justify-center w-full md:w-1/2">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'
                >
                    <h2 className='mb-2 text-4xl font-bold text-center text-black'>Get started</h2>
                    <h2 className='mb-6 text-2xl font-semibold text-center'>Sign In</h2>

                    <input
                        {...register("phone_number")}
                        type="text"
                        placeholder="phone_number"
                        className='w-full p-3 mb-4 border border-[#009688] rounded-lg'
                    />

                    <input
                        {...register("password")}
                        type="password"
                        placeholder="Password"
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

export default Login;
