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
  getCode = () => {
    const db = app.database();
    db.ref('access_code').once('value')
  .then((dataSnapshot) => {
    this.setState({code: dataSnapshot.val()})
  });
  }
  componentDidMount() {
    this.getCode()

  }


  render() {
    const { push } = this.props.navigation;
    //const { navigation } = this.props;

    const db = app.database();
    async function saveLoginInfo(push, page, name, email, password, id) {
      try {

        await AsyncStorage.setItem('email', email)
        await AsyncStorage.setItem('name', name)
        await AsyncStorage.setItem('password', password)
        await AsyncStorage.setItem('id', id)
        push(page)

      } catch (err){
        console.log(err)
      }
    }
    return (
<SafeAreaView style={styles.body}>
  <ScrollView>
  <TouchableOpacity style={{width: 40}} onPress={() => this.props.navigation.navigate('signInHome')}>
    <IconEntypo name="chevron-thin-left" size={30}/>
  </TouchableOpacity>
  <Text style={styles.header}>Sign Up</Text>
  <View style={styles.container}>

    <TextInput
    value={this.state.name}
    onChangeText={(name) => this.setState({ name })}
    label='Name'
    placeholder='Name(First Last)...'
    style={styles.input}
    />

    <TextInput
    value={this.state.email}
    onChangeText={(email) => this.setState({ email })}
    label='Email'
    placeholder='Email...'
    style={styles.input}
    />

    <TextInput
    value={this.state.password}
    onChangeText={(password) => this.setState({ password })}
    label='Password'
    placeholder='Password...'
    secureTextEntry={true}
    style={styles.input}
    />
    <TextInput
    value={this.state.access_code}
    onChangeText={(access_code) => this.setState({ access_code })}
    label='access_code'
    placeholder='Access Code...'
    secureTextEntry={true}
    style={styles.input}
    />
    <TouchableOpacity
    style={styles.sectionContainer2}
    onPress={() => {
    const { name, email, password, code, access_code } = this.state;
    var page = this.props.route.params.page;
    console.log(code)
    if (code === access_code){
      app.auth().createUserWithEmailAndPassword(email, password).then(function(result) {
      app.auth().signInWithEmailAndPassword(email, password).then(function(result) {
      var user = firebase.auth().currentUser;
      user.updateProfile({

      displayName: name,
      }).then(function() {
        var user = app.auth().currentUser;
        if (user != null) {
            var id = user.uid
        }
        saveLoginInfo(push, page, name, email, password, id)

      }).catch(function(error) {});
      })
      .catch(function(error) {
      console.log("error")
      alert(error)
      })
      }).catch(function(error) {
      alert(error)
      });
    }else{
      alert("Invalid Access Code. Email volunteer@goodsamfrc.org to get access.")
    }

    }}>
      <Text style={styles.Text}>Signup</Text>
    </TouchableOpacity>
  <Text style={styles.code}>Email volunteer@goodsamfrc.org{'\n'}for Access Code</Text>
  </View>
  </ScrollView>
</SafeAreaView >
    );
  }
}
