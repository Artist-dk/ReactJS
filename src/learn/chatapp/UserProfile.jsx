import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>Email: {user.email}</p>
      <button onClick={() => console.log('Update profile')}>Update Profile</button>
    </div>
  );
};

export default UserProfile;
