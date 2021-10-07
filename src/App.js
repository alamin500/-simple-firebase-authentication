import "./App.css";
import initailizeAuthentication from "./firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const provider = new GoogleAuthProvider();
initailizeAuthentication();

function App() {
  const [user, setUser] = useState({});
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      const { displayName, email, photoURL } = result.user;
      const loggedInUser = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      setUser(loggedInUser);
    });
  };
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <br />
      {user.email && (
        <div>
          <h2>Welcome{user.name}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
