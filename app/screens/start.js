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
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
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
    const hey = await AsyncStorage.getItem('token')


    this.props.navigation.navigate('page-two')
    
      }
  componentDidMount() {


    async function Storage() {
      try {

        await AsyncStorage.setItem('token', 'abc123')

      } catch (err){
        console.log(err)
      }
    }
    //Storage()


    this.login()



  }

  render(



  ) {





    return (
      <SafeAreaView>




      </SafeAreaView >

    );
  }
}
