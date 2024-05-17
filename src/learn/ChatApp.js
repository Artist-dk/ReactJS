import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import ChatList from './chatapp/ChatList';
import ChatRoom from './chatapp/ChatRoom';
import SignIn from './chatapp/SignIn';
import SignUp from './chatapp/SignUp';
import ForgotPassword from './chatapp/ForgotPassword';
import UserProfile from './chatapp/UserProfile';
import Settings from './chatapp/Settings';


const ChatApp = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
  }, []);

  return (
    <Router>
      <div className="ChatApp">
        <Routes>
          <Route exact path="/"
            element={user ? <ChatList user={user} /> : <SignIn />}
            >
          </Route>
          <Route path="/chat/:chatId"
            element={user ? <ChatRoom user={user} /> : <SignIn />}
            >
          </Route>
          <Route path="/signin"
            element={<SignIn />}
            >
          </Route>
          <Route path="/signup"
            element={<SignUp />}
            >
          </Route>
          {/* <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/profile">
            {user ? <UserProfile user={user} /> : <SignIn />}
          </Route>
          <Route path="/settings">
            {user ? <Settings user={user} /> : <SignIn />}
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
};

export default ChatApp;
