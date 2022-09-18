// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaVZttdnJltrF-R2dz15c7lzIZMJvvwAQ",
  authDomain: "mokom-chat-app.firebaseapp.com",
  projectId: "mokom-chat-app",
  storageBucket: "mokom-chat-app.appspot.com",
  messagingSenderId: "745142071258",
  appId: "1:745142071258:web:64e9eb43a33daea0441ae3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
