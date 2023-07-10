import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const response = await fetch('http://localhost:9090/user/logout', {
          method: 'GET',
          credentials: 'include'
        });
        if (response.ok) {
          navigate('/'); // Redirect to the login page after successful logout
        } else {
          throw new Error('Logout failed');
        }
      } catch (error) {
        console.error('Logout error:', error.message);
      }
    };

    logoutUser();
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
      {/* show a loading spinner or any other message while logging out */}
    </div>
  );
};

export default Logout;
