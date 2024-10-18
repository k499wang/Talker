import React from 'react'
import { useState } from 'react'
import { useAuth } from '../pages/context/AuthContext'

const useLoginUser = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuth();



    const loginUser = async(email, password) => {
        setLoading(true);

        try{
            const res = await fetch("http://localhost:3001/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include', // Include cookies in cross-origin requests
                body: JSON.stringify({email, password}),
        
            });

            const data = await res.json();
            if (res.status !== 200) {
                console.log(data);
                throw new Error(data.message);
            }

            localStorage.setItem('authUser', JSON.stringify(data));
            setAuthUser(data);




        } catch (error){
            alert(error);
        } finally{
            setLoading(false)
        }

    }

    return {loginUser, loading};

}

export default useLoginUser
