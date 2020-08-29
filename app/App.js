/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import firebase from 'firebase/app'
var firebaseConfig = {
  apiKey: "AIzaSyAlvFdS-rDVRZmo6GU9me7ez8-GPgqG4qY",
  authDomain: "goodsam-web.firebaseapp.com",
  databaseURL: "https://goodsam-web.firebaseio.com",
  projectId: "goodsam-web",
  storageBucket: "goodsam-web.appspot.com",
  messagingSenderId: "779659380354",
  appId: "1:779659380354:web:fd5488d7ec00196c40d69b",
  measurementId: "G-XELR89ZT1C"
};
firebase.initializeApp(firebaseConfig);
import Screens from './screens/screens'
class App extends React.Component {
render() { return (
  <Screens />
  )
}
}

export default App;
