import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCprWlBbUOni4imG5McNLjrgO7p7-gSVJw",
  authDomain: "clone-1d88c.firebaseapp.com",
  projectId: "clone-1d88c",
  storageBucket: "clone-1d88c.appspot.com",
  messagingSenderId: "590497882097",
  appId: "1:590497882097:web:dfe7092276355dc5d46e50",
  measurementId: "G-5BBC3J3MP8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
