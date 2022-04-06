import './App.css';
 import app from './firebase.init';
 import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
 const auth = getAuth(app);


function App() {
  const [user,setUser] = useState();
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn =()=>{
    signInWithPopup(auth, provider)
    .then(result =>{
      const user =result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error=>{
      console.error('error',error)
    })
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Googl Sign In</button>
      <h2>Name:{user.displayName}</h2>
      <p>I know your Email Address:{user.email}</p>
      <img src={user.photoURL} alt=''/>
      
    </div>
  );
}

export default App;
