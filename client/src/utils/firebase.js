
import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "hiresense-83f5a.firebaseapp.com",
  projectId: "hiresense-83f5a",
  storageBucket: "hiresense-83f5a.firebasestorage.app",
  messagingSenderId: "624415239719",
  appId: "1:624415239719:web:fe6c85da50fe8ffed26802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth, provider}