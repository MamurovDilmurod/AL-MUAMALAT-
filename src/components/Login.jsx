import React, { useState } from 'react';
import { Input, Button, Form, message } from 'antd';
import loginimg from '../img/loginimg.png';

function Login() {
    const [isSignUp, setIsSignUp] = useState(false); // Sign up yoki login formalarini almashtirish uchun holat

    const onFinish = (values) => {
        // Bu yerda form ma'lumotlarini yuborish jarayonini qo'llaymiz
        message.success(`${isSignUp ? 'Signed up' : 'Logged in'} successfully!`);
    };

    return (
        <div className='flex justify-between max-w-[1320px] mx-auto px-6 py-12'>
            {/* Form Section */}
            <div className="flex items-center justify-center w-full md:w-1/2">
                <Form
                    className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'
                    onFinish={onFinish}
                >
                    <h2 className='mb-2 text-4xl font-bold text-center text-black'>Get started</h2>
                    <h2 className='mb-6 text-2xl font-semibold text-center'>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>

                    {/* Email for Sign In */}
                    {isSignUp && (
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please input a valid email!' }]}
                        >
                            <Input
                                placeholder="Email"
                                className='w-full p-3 mb-4 border border-gray-300 rounded-lg'
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    boxShadow: 'none',
                                    border: '1px solid #009688',
                                    outline: '#009688',

                                }}
                            />
                        </Form.Item>
                    )}

                    {/* Username */}
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            placeholder="Username"
                            className='w-full p-3 mb-4 border border-gray-300 rounded-lg'
                            style={{
                                border: 'none',
                                outline: 'none',
                                boxShadow: 'none',
                                border: '1px solid #009688',
                                outline: '#009688',

                            }}
                        />
                    </Form.Item>

                    {/* Password */}
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            placeholder="Password"
                            className='w-full p-3 mb-6 rounded-lg'
                            style={{
                                border: 'none',
                                outline: 'none',
                                boxShadow: 'none',
                                border: '1px solid #009688',
                                outline: '#009688',

                            }}
                        />
                    </Form.Item>

                    {/* Submit Button */}
                    <Button
                        htmlType="submit"
                        className='w-full py-3 font-semibold transition-all duration-300 hover:bg-yellow-600'
                        style={{
                            backgroundColor: '#009688',
                            color: 'white',
                            borderRadius: '10px',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '24px 0px',
                            fontSize: '16px',
                        }}
                    >
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>

                    {/* Switch Between Sign Up and Sign In */}
                    <div className='mt-4 text-center'>
                        <span className='text-gray-600'>
                            {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                            <Button
                                type="link"
                                onClick={() => setIsSignUp(!isSignUp)}
                                className='font-semibold text-yellow-500'>
                                {isSignUp ? 'Sign In' : 'Sign Up'}
                            </Button>
                        </span>
                    </div>
                </Form>
            </div>

            {/* Image Section */}
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
