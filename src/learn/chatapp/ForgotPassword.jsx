import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const resetPassword = async () => {
    try {
      console.log('Password reset email sent');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="forgot-password">
      <h2>Forgot Password</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={resetPassword}>Reset Password</button>
    </div>
  );
};

export default ForgotPassword;
