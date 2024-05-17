import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChatRoom = ({ user }) => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => { 
  }, [chatId]);

  const sendMessage = async () => {
  };

  return (
    <div className="chat-room">
      <h2>Chat Room</h2>
      <ul>
        {messages.map(message => (
          <li key={message.id}>
            <strong>{message.senderId === user.uid ? 'You' : 'Other User'}:</strong> {message.content}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Type your message..."
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatRoom;
