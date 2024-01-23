
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../assets';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Register = () => {

    const navigate = useNavigate()

    const [data, setData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    })

    const registerUser = async (e) => {
        e.preventDefault()
        const { name, username, email, password } = data
        try {
            const { data } = await axios.post('/register', {
                name, username, email, password
            })

            if (data.error) {
                toast.error(data.error)
            }
            else {
                setData({})
                toast.success('Login successful, Welcome!')
                navigate('/login')
            }
        }
        catch (error) {
            console.log('This is error', error)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="max-w-md w-full md:max-w-full md:flex md:items-center p-8 space-y-4 bg-white rounded-lg ">
                {/* Image for Medium and Larger Screens */}
                <div className="hidden md:block md:w-1/2">
                    <img
                        className="rounded-2xl w-full h-auto "
                        src={signup}
                        alt="Login Background"
                    />
                </div>

                {/* Form Section */}
                <div className="md:w-1/2 px-8 md:px-16">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sign up for Task Club</h2>
                    <form onSubmit={registerUser} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Your name"
                                value={data.name}
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Your username"
                                value={data.username}
                                onChange={(e) => setData({ ...data, username: e.target.value })}
                            />
                        </div>
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
                        <div className="flex items-center">
                            <input
                                id="agreeTerms"
                                type="checkbox"
                                className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                            />
                            <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-900">
                                I agree to the <Link to="/terms">terms and conditions</Link>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="py-3 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Sign up
                        </button>
                        <p className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                            Already have an account?
                            <Link to="/login" className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 text-[#002D74]">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
