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
    const logged_in = await AsyncStorage.getItem('email')
    const name = await AsyncStorage.getItem('name')
    if (logged_in != null){
      this.props.navigation.push('home2', {name: name})
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
