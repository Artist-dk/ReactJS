import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithEmailAndPassword = async () => {
    try {
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={signInWithEmailAndPassword}>Sign In</button>
    </div>
  );
};

export default SignIn;
