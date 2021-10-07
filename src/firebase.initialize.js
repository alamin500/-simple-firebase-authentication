import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase/firebase.config";

const initailizeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initailizeAuthentication;
