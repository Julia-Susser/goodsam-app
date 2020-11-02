import React, { Component } from 'react';
import { Text, TextInput, Dimensions,TouchableOpacity, SafeAreaView, Alert, Button, View, StyleSheet } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import firebase from 'firebase/app'
import 'firebase/auth'
import {app} from '../config';
export default class Login extends Component {
  constructor(props) {
    super(props);



    this.state = {
      name: '',
      email: '',
      password: '',

    };
  }
  componentDidMount() {
    firebase.auth().signOut().then(function() {

  }).catch(function(error) {
    // An error happened.
  });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { route } = this.props.route;

    return (
      <SafeAreaView style={styles.body}>

      <TouchableOpacity
       onPress={() => navigate('Home')}>
         <IconAntDesign name="left" size={50}/>
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
               console.log(name)

              user.updateProfile({

                displayName: name,
              }).then(function() {
                navigate('page-two')
              }).catch(function(error) {
                // An error happened.
              });

             })
             .catch(function(error) {
             console.log("error")
             alert(error)
           })
           }).catch(function(error) {
             alert(error)
             var errorCode = error.code;
             var errorMessage = error.message;
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
