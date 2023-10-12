import React, { useEffect } from 'react';
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.accessToken) {
      navigate('/signup');
    }
  }, [user, navigate]);

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>User Details:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button onClick={logout}>Logout</button>
        </div>
      ) : null}
    </div>
  );
}

export default ProfilePage;
