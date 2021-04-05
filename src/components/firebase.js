import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

 var firebaseConfig = {
    apiKey: "AIzaSyBIeEnv8AtTi67hU3clROMaebSgNsTndDU",
    authDomain: "capstone-400bb.firebaseapp.com",
    projectId: "capstone-400bb",
    storageBucket: "capstone-400bb.appspot.com",
    messagingSenderId: "256469998930",
    appId: "1:256469998930:web:741804e6d34b5be7eb6e8b",
    measurementId: "G-D7WL8V531S"
  };
  const Fire = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();
  export  default Fire
  export {db,storage,auth}