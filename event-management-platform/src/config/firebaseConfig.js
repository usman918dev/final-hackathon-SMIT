import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDIYD3cwD11JQuUz7Dqo6nuGfChvETjyVY",
  authDomain: "mycrud-fb918.firebaseapp.com",
  projectId: "mycrud-fb918",
  storageBucket: "mycrud-fb918.appspot.com",
  messagingSenderId: "820527940203",
  appId: "1:820527940203:web:242fa36c83b63c9361a72e",
  measurementId: "G-T8QYX66VJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// export const db = getFirestore(app);
 const storage = getStorage(app);
 export default storage
// export const auth = getAuth(app);  
