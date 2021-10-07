import "./App.css";
import initailizeAuthentication from "./firebase.initialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const googleProvider = new GoogleAuthProvider();
const githunProvider = new GithubAuthProvider();
initailizeAuthentication();

function App() {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githunProvider).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  const handleSignOUt = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}> Google Sign In</button>
      <button onClick={handleGithubSignIn}>Github Sign In</button>
      <button onClick={handleSignOUt}></button>
      <br />
      {user.email && (
        <div>
          <h2>Welcome {user.name}</h2>
          <p>I know your email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
