import React, { useState,useRef } from 'react';
import './Chat.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message';
function Chat({ user }) {
  const [message, setMessage] = useState('');
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection('messages');
  const quary = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(quary, { idField: 'id' });
  const dummy = useRef(null);
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = user;
    await messagesRef.add({
      Text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setMessage('');
    dummy.current.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <>
      <div className="chat-window">
        {messages &&
          messages.map((msg,index) => {
            return <Message key={index} message={msg} user={user} />;
          })}
        <span ref={dummy}></span>
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type here..."
        />
        <button>Send</button>
      </form>
    </>
  );
}

export default Chat;
