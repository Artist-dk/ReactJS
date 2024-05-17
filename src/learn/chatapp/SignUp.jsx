import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpWithEmailAndPassword = async () => {
    try {
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={signUpWithEmailAndPassword}>Sign Up</button>
      <Link to="/signin" >sign in</Link>
    </div>
  );
};

export default SignUp;
