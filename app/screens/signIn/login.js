import React, { Component } from 'react';
import { Text, TextInput, Dimensions,TouchableOpacity, SafeAreaView, Alert, Button, View, StyleSheet } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo'

import {app} from '../../config';
import firebase from 'firebase/app'
import 'firebase/auth'
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',

    };
  }
  componentDidMount() {

    firebase.auth().signOut().then(function() {

  }).catch(function(error) {
    // An error hfirebaseened.
  });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.body}>

      <TouchableOpacity
      style={{width: 40}}
       onPress={() => navigate('signInOptions')}>
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
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    justifyContent: 'center'
  },
  header : {
    marginTop:height*.15,
    marginLeft: width*.07,
    marginBottom: 30,
    color: 'orange',
    fontWeight:'bold',
    fontSize: 35,
  },
  input: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    width:width*.85,
    height:60,
  },
  sectionContainer2 : {
      borderRadius: 50,
      alignItems: 'center',
      height:60,
      width: width * .7,
      backgroundColor: 'darkblue',
      justifyContent: 'center',

  },
  Text : {
    color: 'white',
    fontWeight:'bold',
  },
  body: {
    width:width,
    height:height,
    backgroundColor: 'white',
  },
  inputext: {
    textAlign:'center',
    fontWeight:'bold',
    borderWidth: 1,
    borderColor: 'black',
  },
});
