import React, { Component } from 'react';
import { Text, TextInput, Dimensions,TouchableOpacity, SafeAreaView, Alert, Button, View, StyleSheet } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo'
import  AsyncStorage  from '@react-native-community/async-storage'
import {app} from '../../../config';
import firebase from 'firebase/app'
import 'firebase/auth'
import styles from './login-css'
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',

    };
  }
  componentDidMount() {
  }

  render() {
    const { navigate } = this.props.navigation;
    async function saveLoginInfo(email, password) {
      try {

        await AsyncStorage.setItem('email', email)
        await AsyncStorage.setItem('password', password)

      } catch (err){
        console.log(err)
      }
    }
    return (
<SafeAreaView style={styles.body}>

  <TouchableOpacity style={{width: 40}} onPress={() => navigate('signInOptions')}>
    <IconEntypo name="chevron-thin-left" size={30}/>
  </TouchableOpacity>

  <Text style={styles.header}>Log In</Text>
  <View style={styles.container}>
    <TextInput
    value={this.state.email}
    onChangeText={(email) => this.setState({ email })}
    placeholder="  Email..."
    style={styles.input}
    />
    <TextInput
    value={this.state.password}
    onChangeText={(password) => this.setState({ password })}
    placeholder="  Password..."
    secureTextEntry={true}
    style={styles.input}
    />

    <TouchableOpacity
    style={styles.sectionContainer2}
    onPress={() => {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
    navigate('home')
    saveLoginInfo(email, password)
    })
    .catch(function(error) {
    console.log("error")
    alert(error)
    });}}>
      <Text style={styles.Text}>Signup</Text>
    </TouchableOpacity>

  </View>
</SafeAreaView >
    );
  }
}
