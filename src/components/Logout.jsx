import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    // Implement logic to clear user session/token from local storage or cookies.
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
