import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <header>
      <h1>Ak</h1>
      {props.user && (
        <h4
          className="Go-Out"
          onClick={() => {
            console.log(props);
            props.auth.signOut();
          }}
        >
          Go-Out
        </h4>
      )}
    </header>
  );
}

export default Header;
