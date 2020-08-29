import React, {Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase/app'
import 'firebase/auth'

export default class Page2 extends Component{
  componentDidMount() {
    firebase.auth().signInWithEmailAndPassword("juliasusser@gmail.com", "Jsusser3").then(function(result) {
    console.log("success")
    })
    .catch(function(error) {
    console.log("error")
    });
  }
  render(){
    return (
      <View>
      <Text>New Page!</Text>
      </View>
    )
  }
}
