import React, { Component } from 'react';
import  AsyncStorage  from '@react-native-community/async-storage';
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import {app} from '../config';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class Start extends Component {

  constructor(props) {
    super(props);
  }
  login=async ()=>{
    const { navigate } = this.props.navigation;
    const logged_in = await AsyncStorage.getItem('email')
    const name = await AsyncStorage.getItem('name')
    const password = await AsyncStorage.getItem('password')
    if (logged_in != null){
    app.auth().signInWithEmailAndPassword(logged_in, "Jsusser3").then(function(result) {
      navigate('home2', {name: name})
      })
      .catch(function(error) {
      navigate('signInOptions')
      });

    }else{
      this.props.navigation.navigate('signInOptions')
    }
    }
  componentDidMount() {

    this.login()
  }

  render() {


    return (
  <SafeAreaView>
  </SafeAreaView >
    );
  }
}
