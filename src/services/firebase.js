// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4M2cAy6pRwOEcJe3xF1-ws1s9q_-NHlQ",
  authDomain: "chat-client-side.firebaseapp.com",
  projectId: "chat-client-side",
  storageBucket: "chat-client-side.appspot.com",
  messagingSenderId: "1001417399319",
  appId: "1:1001417399319:web:8662715073c8322bf19052"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();
