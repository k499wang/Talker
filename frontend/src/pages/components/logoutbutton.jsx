import React from 'react';
import useLogoutUser from '../../hooks/useLogoutUser';  // Correct import

const LogoutButton = () => {
  const { logout, loading } = useLogoutUser();  // Correct usage

  return (
    <button onClick={logout} disabled={loading}>
      {loading ? 'Logging out...' : 'Logout'}
    </button>
  );
};

export default LogoutButton;
