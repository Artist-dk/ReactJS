import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const ChatList = ({ user }) => {
  const [chats, setChats] = useState([]);

  // useEffect(() => {
  // }, [user.uid]);

  return (
    <div className="chat-list">
      <h2>Chats</h2>
      <ul> 
        chat list
        {/* {chats.map(chat => (
          <li key={chat.id}>
            <Link to={`/chat/${chat.id}`}>
              {chat.name}
            </Link>
          </li>
        ))} */}
      </ul>
      <button onClick={() => {}}>Sign Out</button>
    </div>
  );
};

export default ChatList;
