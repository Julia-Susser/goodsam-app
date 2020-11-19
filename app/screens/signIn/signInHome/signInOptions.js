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
import styles from './signInOptions-css'

export default class Home extends Component {

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

  componentDidMount() {

  }

  render()

  {


    return (
<SafeAreaView style={styles.body}>



  <View style={styles.imgContainer}>
    <Image style={styles.Image} source={require('../../photos/logo1.png')}/>
    <Image style={styles.Image2} source={require('../../photos/logo2.png')}/>
  </View>
  <TouchableOpacity style={styles.sectionContainer} onPress={() => this.props.navigation.navigate('login')}>
    <Text style={styles.Text}>Login</Text>
  </TouchableOpacity>


  <View style={styles.or}>
  <Text>OR</Text>
  </View>

  <TouchableOpacity style={styles.sectionContainer2} onPress={() => this.props.navigation.navigate('signup')}>
    <Text style={styles.Text}>Signup</Text>
  </TouchableOpacity>

</SafeAreaView >

    );
  }
}
