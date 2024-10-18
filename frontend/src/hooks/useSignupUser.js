import { useState } from 'react';
import {useAuth} from '../pages/context/AuthContext';

const useSignupUser = () => {
    const [loading, setLoading] = useState(false);
    
    const {authUser, setAuthUser} = useAuth();
    const signup = async ({ username, email, password, confirmPassword }) => {
        const checkInputSignup = ({ username, email, password, confirmPassword }) => {
            if (!username || !email || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return false;
            }
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return false;
            }
            if (password.length < 5) {
                alert('Password must be at least 5 characters');
                return false;
            }
            return true;
        };

        const checkInput = checkInputSignup({ username, email, password, confirmPassword });
        if (!checkInput) return;

        setLoading(true); // Indicate loading state

        try {
            const res = await fetch("http://localhost:3001/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include', // Include cookies in cross-origin requests
                body: JSON.stringify({ username, email, password, confirmPassword })
            });

            const data = await res.json();
            if(data.error) {
                alert(data.error);
            }

            console.log({ username, email, password, confirmPassword }, "signupUser.js");
            // set the value in the local storage
            localStorage.setItem('authUser', JSON.stringify(data)); // the data we see in the console.
            setAuthUser(data); // set the authUser state to the data we get back from the server
            window.location.href = '/home';



        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return { signup, loading }; // Ensure you're returning the signup function and loading state
};

export default useSignupUser;
