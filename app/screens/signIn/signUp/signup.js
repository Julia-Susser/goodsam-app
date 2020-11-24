import React, { Component } from 'react';
import { Text, TextInput, ScrollView, Dimensions,TouchableOpacity, SafeAreaView, Alert, Button, View, StyleSheet } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo'
import firebase from 'firebase/app'
import 'firebase/auth'
import {app} from '../../../config';
import styles from './signup-css'
import  AsyncStorage  from '@react-native-community/async-storage';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',

    };
  }
  send = (name, email, subject, message) => {
    const db = app.database();
    db.ref('emails').push({
      name: name,
      email: email,
      subject: subject,
      message: message
    })
  }
  componentDidMount() {}

  render() {
    const { push } = this.props.navigation;
    async function saveLoginInfo(name, email, password) {
      try {

        await AsyncStorage.setItem('email', email)
        await AsyncStorage.setItem('name', name)
        await AsyncStorage.setItem('password', password)
        console.log(name)

      } catch (err){
        console.log(err)
      }
    }
    return (
<SafeAreaView style={styles.body}>
  <ScrollView>
  <TouchableOpacity style={{width: 40}} onPress={() => navigate('home2')}>
    <IconEntypo name="chevron-thin-left" size={30}/>
  </TouchableOpacity>
  <Text style={styles.header}>Sign Up</Text>
  <View style={styles.container}>

    <TextInput
    value={this.state.name}
    onChangeText={(name) => this.setState({ name })}
    label='Name'
    placeholder='  Name...'
    style={styles.input}
    />

    <TextInput
    value={this.state.email}
    onChangeText={(email) => this.setState({ email })}
    label='Email'
    placeholder='  Email...'
    style={styles.input}
    />

    <TextInput
    value={this.state.password}
    onChangeText={(password) => this.setState({ password })}
    label='Password'
    placeholder='  Password...'
    secureTextEntry={true}
    style={styles.input}
    />

    <TouchableOpacity
    style={styles.sectionContainer2}
    onPress={() => {
    const { name, email, password } = this.state;
    app.auth().createUserWithEmailAndPassword(email, password).then(function(result) {
    app.auth().signInWithEmailAndPassword(email, password).then(function(result) {
    var user = firebase.auth().currentUser;
    user.updateProfile({

    displayName: name,
    }).then(function() {
      saveLoginInfo(name, email, password)
      push('home2')
    }).catch(function(error) {});
    })
    .catch(function(error) {
    console.log("error")
    alert(error)
    })
    }).catch(function(error) {
    alert(error)
    });

    }}>
      <Text style={styles.Text}>Signup</Text>
    </TouchableOpacity>
  </View>
  </ScrollView>
</SafeAreaView >
    );
  }
}
