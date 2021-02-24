import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGDChI90EzWUoIBVXm-tBbPjlVkJHFSVA",
  authDomain: "church-91d73.firebaseapp.com",
  databaseURL: "https://church-91d73-default-rtdb.firebaseio.com",
  projectId: "church-91d73",
  storageBucket: "church-91d73.appspot.com",
  messagingSenderId: "958814701636",
  appId: "1:958814701636:web:233e04603293009c945411",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
