import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaLf3qZJQ8FLHVrfE6znDx1RV55IG8OEw",
  authDomain: "shopping-mart-5b0ea.firebaseapp.com",
  databaseURL: "https://shopping-mart-5b0ea.firebaseio.com",
  projectId: "shopping-mart-5b0ea",
  storageBucket: "shopping-mart-5b0ea.appspot.com",
  messagingSenderId: "470037763256",
  appId: "1:470037763256:web:b314c092fdf56681fe904d",
  measurementId: "G-SHLD5022X8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
