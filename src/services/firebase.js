// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFyn0z5WLDVYsEmi1nVFbsq53yxBLLKoc",
    authDomain: "chat-clientside.firebaseapp.com",
    projectId: "chat-clientside",
    storageBucket: "chat-clientside.appspot.com",
    messagingSenderId: "632130411444",
    appId: "1:632130411444:web:d45e182fbe5438a1ee30e1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();
