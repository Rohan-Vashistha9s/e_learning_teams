import React, { useState } from 'react';
import bgimage1 from '../assest/media/log-bg.jpeg';
import bgimage2 from '../assest/media/res-bg.jpeg';

const LoginSignup = () => {
    const [isSignup, setIsSignup] = useState(false);

    const handleToggle = (isSignupPage) => {
        setIsSignup(isSignupPage);
    };

    return (
        <div className="flex h-screen">
            <div
                className={`hidden md:block w-[35rem] h-[35rem] m-auto bg-cover bg-center rounded-xl`}
                style={{
                    backgroundImage: `url(${isSignup ? bgimage2 : bgimage1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                }}
            >
                {/* Background image only on larger screens */}
            </div>
            <div className="w-full md:w-2/4 bg-white flex flex-col justify-center p-6">
                <div className="w-[30rem] border-none mx-auto bg-white rounded-3xl overflow-hidden">
                    <div className="flex justify-between mb-4">
                        <button
                            className={`flex-1 py-3 text-sm font-semibold ${!isSignup ? 'text-white bg-teal-500' : 'text-teal-500 bg-gray-100'} rounded-l-lg transition duration-300`}
                            onClick={() => handleToggle(false)}
                        >
                            Login
                        </button>
                        <button
                            className={`flex-1 py-3 text-sm font-semibold ${isSignup ? 'text-white bg-teal-500' : 'text-teal-500 bg-gray-100'} rounded-r-lg transition duration-300`}
                            onClick={() => handleToggle(true)}
                        >
                            Register
                        </button>
                    </div>

                    <div className="p-6 my-8 mb-8">
                        <p className="text-gray-600 mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        {!isSignup ? (
                            <form>
                                <div className="mb-4">
                                    <input type="text" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-3xl focus:border-teal-500" required />
                                </div>
                                <div className="mb-4">
                                    <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-3xl focus:border-teal-500" required />
                                </div>
                                <div className="flex justify-between mb-4 text-sm text-gray-600">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Remember me
                                    </label>
                                    <a href="#" className="hover:underline">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300">
                                    Login
                                </button>
                            </form>
                        ) : (
                            <form>
                                <div className="mb-4">
                                    <input type="text" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-3xl focus:border-teal-500" required />
                                </div>
                                <div className="mb-4">
                                    <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-3xl focus:border-teal-500" required />
                                </div>
                                <div className="mb-4">
                                    <input type="password" placeholder="Confirm Password" className="w-full p-3 border border-gray-300 rounded-3xl focus:border-teal-500" required />
                                </div>
                                <button type="submit" className="w-full py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300">
                                    Register
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;