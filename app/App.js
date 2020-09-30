/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */




//TouchableOpacity




import 'react-native-gesture-handler';
import React, {Component} from 'react'
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
import 'firebase/auth'
import Screens from './screens/screens'
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var user = firebase.auth().currentUser;

    if (user) {
      console.log("in")
    } else {
      console.log("out")
    }
  }
render(){ return (
  <Screens />
  )
}
}
