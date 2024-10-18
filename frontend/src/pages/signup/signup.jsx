import React from 'react'
import { useState } from 'react'
import useSignupUser from '../../hooks/useSignupUser.js';


// useState is used to create a state variable
// The state variable is used to store the form data


// e.preventDefault() is used to prevent the default behavior of the form submission
// window.location.href is used to redirect the user to the login page
// The default behaviour of the submission is to reload the page
const Signup = () => {
    const NavigateToLogin = (e) => {
        e.preventDefault();
        window.location.href = '/login';
    };

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { signup, loading } = useSignupUser();

    const submitLogin = async (e) => {
        
        e.preventDefault();
        try {
            await signup(inputs);
        } catch (error) {
            console.error("Signup failed", error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-lg p-8 shadow-lg shadow-blue-300/50 text-center w-1/2">
                <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
                
                <form onSubmit={submitLogin}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-left">Username</label>
                        <input type="text" id="username" className="w-full p-2 border border-gray-300 rounded-md" 
                            value={inputs.username}
                            onChange={(e) => setInputs({...inputs, username: e.target.value})} // take the input state, but you only want to change the username
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-left">Email</label>
                        <input type="text" id="email" className="w-full p-2 border border-gray-300 rounded-md"
                        value={inputs.email}
                        onChange={(e) => setInputs({...inputs, email: e.target.value})} // onChange whenver the input field changes, e is the event object
                        // setInputs is a function that takes an object and updates the state, ..inputs is the spread operator, to create a copy of the current state object

                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-left">Password</label>
                        <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-md"
                        value = {inputs.password}
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-left">Confirm Password</label>
                        <input type="password" id="confirmPassword" className="w-full p-2 border border-gray-300 rounded-md" 
                        value = {inputs.confirmPassword}
                        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-full" onClick={submitLogin}  disabled={loading}                    >
                        Sign Up
                    </button>
                    
                    <div>
                        <button className="btn btn-link" onClick={NavigateToLogin}>
                            Already have an account?
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Signup
