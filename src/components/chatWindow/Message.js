import React from 'react';

function Message({ message, user }) {
  const { Text, uid, photoURL } = message;
  const messageClass = uid === user.uid ? 'sent' : 'received';
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="" />
      <p className="message-tex">{Text}</p>
    </div>
  );
}

export default Message;
