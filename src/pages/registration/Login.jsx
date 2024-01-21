
import { Link } from 'react-router-dom';
import { login } from '../../assets';
import { useState } from 'react';

const Login = () => {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const loginUser = (e) => {
        e.preventDefault()
    }
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="max-w-md w-full md:max-w-full md:flex md:items-center p-8 space-y-4 bg-white rounded-lg ">
                {/* Image for Medium and Larger Screens */}
                <div className="hidden md:block md:w-1/2 ">
                    <img
                        className="rounded-2xl w-full h-auto"
                        src={login}
                        alt="Login Background"
                    />
                </div>

                {/* Form Section */}
                <div className="md:w-1/2 px-8 md:px-16">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sign in to Task Club</h2>
                    <form onSubmit={loginUser} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Your email"
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Your password"
                                value={data.password}
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                            />
                        </div>
                        <button
                            type="submit"
                            className="py-3 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Login
                        </button>
                        <p className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                            Don't have an account?
                            <Link to="/register" className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 text-[#002D74]">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
