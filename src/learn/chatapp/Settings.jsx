import React from 'react';

const Settings = ({ user }) => {
  return (
    <div className="settings">
      <h2>Settings</h2>
      <ul>
        <li>Email: {user.email}</li>
        <li>
          <button onClick={() => console.log('Change email')}>Change Email</button>
        </li>
        <li>
          <button onClick={() => console.log('Change password')}>Change Password</button>
        </li>
      </ul>
    </div>
  );
};

export default Settings;
