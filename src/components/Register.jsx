import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginimg from '../img/loginimg.png';
import { useAuth } from '../context';
import { useForm } from 'react-hook-form';

function Register() {
    const [form, setForm] = useState({ email: '', username: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const auth = useAuth();
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        const { full_name, password, phone_number } = data;
        auth.register({ full_name, password, phone_number }, () => {
            alert('Successfully registered');
        });
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-[1320px] mx-auto px-6 py-12 gap-10">
            {/* Form section */}
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
                >
                    <h2 className="mb-2 text-4xl font-bold text-center text-black">Get started</h2>
                    <h2 className="mb-6 text-2xl font-semibold text-center">Sign Up</h2>

                    <input
                        type="text"
                        required
                        placeholder='Full Name'
                        {...register("full_name")}
                        className="w-full p-3 mb-4 border border-[#009688] rounded-lg"
                    />

                    <input
                        type="password"
                        placeholder="password"
                        required
                        {...register("password")}
                        className="w-full p-3 mb-4 border border-[#009688] rounded-lg"
                    />

                    <input
                        type="text"
                        placeholder="Phone Number"
                        required
                        {...register("phone_number")}
                        className="w-full p-3 mb-6 border border-[#009688] rounded-lg"
                    />

                    <button
                        type="submit"
                        className="w-full py-3 font-semibold transition-all duration-300 hover:bg-yellow-600"
                        style={{
                            backgroundColor: '#009688',
                            color: 'white',
                            borderRadius: '10px',
                            fontSize: '16px',
                        }}
                    >
                        Sign Up
                    </button>

                    <div className="mt-4 text-center">
                        <span className="text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="font-semibold text-blue-500 hover:text-blue-600">Sign In</Link>
                        </span>
                    </div>
                </form>
            </div>

            {/* Image and text section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-[#009688] rounded-lg p-6 h-[400px] md:h-[500px] lg:h-[600px]">
                <img src={loginimg} alt="Login Banner" className="object-contain w-64 h-64 mb-6 md:w-80 md:h-80" />
                <h2 className="text-xl font-bold leading-snug text-center text-white md:text-2xl lg:text-3xl">
                    Welcome to Al Muamalat – <br />
                    Empowering Your Journey in <br />
                    Islamic Finance
                </h2>
            </div>
        </div>
    );
}

export default Register;
