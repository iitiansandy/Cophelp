const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyDEVWbi3Ns3uxfHzad83iuHTgdsXmqJFK4",
  authDomain: "cophelp-51087.firebaseapp.com",
  projectId: "cophelp-51087",
  storageBucket: "cophelp-51087.appspot.com",
  messagingSenderId: "43527411014",
  appId: "1:43527411014:web:f56341fdcf7fc284f0c147",
  measurementId: "G-9H5CNMZ554"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;