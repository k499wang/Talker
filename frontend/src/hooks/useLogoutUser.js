import React, { useState } from 'react';
import { useAuth } from '../pages/context/AuthContext';

const useLogoutUser = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuth();

  const logout = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        credentials: 'include' // Include cookies in cross-origin requests

      });

      if (!response.ok) {
        console.log(response);
        throw new Error('Logout request failed');
      }

      const data = await response.json();
      
      if(data.error) {
        alert(data.error);
      }
      
      localStorage.removeItem('authUser');
      setAuthUser(null);
      window.location.href = '/login';

      console.log(data);

    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading }; // Return logout and loading state
};

export default useLogoutUser;

