import React from 'react';
import './SignIn.css';
import firebase from 'firebase/compat/app';
function SignIn({auth}) {
  const signInWithGoogle = (e) => {
    e.preventDefault()
    const provider= new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <div>
      <p>Sign in to start chat</p>
      <button onClick={signInWithGoogle} className="signin-btn">Sign in with google</button>
    </div>
  );
}

export default SignIn;
