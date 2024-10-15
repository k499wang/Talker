
import React from 'react'

const Signup = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-lg p-8 shadow-lg shadow-blue-300/50 text-center w-1/2">
                <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
                
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-left">Username</label>
                        <input type="text" id="username" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-left">Email</label>
                        <input type="text" id="email" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-left">Password</label>
                        <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-left">Confirm Password</label>
                        <input type="password" id="confirmPassword" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Sign Up
                    </button>
                    
                    <div>
                        <button className="btn btn-link">
                            Already have an account?
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
