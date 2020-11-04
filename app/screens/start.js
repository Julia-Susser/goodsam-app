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

    this.state = {
      email: [],
      password: '',
      userName: 'hey',
      token: "",
      items: [],

    };
  }
  login=async ()=>{
    const logged_in = await AsyncStorage.getItem('email')
    if (logged_in != ""){
      this.props.navigation.navigate('home')
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
