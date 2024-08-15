import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBAObMS3ioXXDNdhM5lLcee3aji3kYY6zM",
  authDomain: "foodapp-3dc7b.firebaseapp.com",
  projectId: "foodapp-3dc7b",
  storageBucket: "foodapp-3dc7b.appspot.com",
  messagingSenderId: "226278067050",
  appId: "1:226278067050:web:3010cf549c9ad7e0f87313",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
