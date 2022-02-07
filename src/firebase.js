// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAHcY1_RNmxRI20fQ-YJ0dnJB5EZshBm2k",
    authDomain: "facebooclone.firebaseapp.com",
    projectId: "facebooclone",
    storageBucket: "facebooclone.appspot.com",
    messagingSenderId: "1056116435193",
    appId: "1:1056116435193:web:8690ac21b46d15571d5a28",
    measurementId: "G-LQFCRXXDXJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db