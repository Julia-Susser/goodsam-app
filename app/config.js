import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAm0joN22DeZYaagKfAP1hmKYJukoXGDC4",
  authDomain: "goodsamapp-9a49d.firebaseapp.com",
  databaseURL: "https://goodsamapp-9a49d.firebaseio.com",
  projectId: "goodsamapp-9a49d",
  storageBucket: "goodsamapp-9a49d.appspot.com",
  messagingSenderId: "568111616530",
  appId: "1:568111616530:web:a33941b8ce283ded1abecb",
  measurementId: "G-S1K522HSF4"
  };

export const app = Firebase.initializeApp(firebaseConfig);
