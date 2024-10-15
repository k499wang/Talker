import React from 'react'

const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-lg p-8 shadow-lg shadow-blue-300/50 text-center w-1/2">
          <h1 className="text-2xl font-bold mb-4">Chat App</h1>
          
          <form>
            <div className="mb-4">
                <label htmlFor="email" className="block text-left">Email</label>
                <input type="text" id="email" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-left">Password</label>
                <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>

          </form>
          
          <div>
          <button className="btn btn-primary mb-4">
            Login
          </button>
          </div>
          <div>
            <button className="btn btn-link">
              Don't have an account?
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login
