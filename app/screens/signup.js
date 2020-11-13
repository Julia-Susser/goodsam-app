import React, { Component } from 'react';
import { Text, TextInput, Alert, Button, View, StyleSheet } from 'react-native';

import firebase from 'firebase/app'
import 'firebase/auth'
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




  onLogin(navigate) {
    const { email, password, name } = this.state;


    firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {

      alert("success")

    })
    .catch(function(error) {
    console.log("error")
    alert(error)
    });




  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text style={styles.inputext}>Login Form</Text>
      <Text>Full Name</Text>
        <TextInput
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
           label='Name'
          style={styles.input}
        />
      <Text>Email</Text>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
           label='Email'
          style={styles.input}
        />
        <Text>Password</Text>
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          label='Password'
          secureTextEntry={true}
          style={styles.input}
        />

        <Button
          title={'Login'}
          style={styles.input}
          onPress={() => {
            const { name, email, password } = this.state;
            
            firebase.auth().createUserWithEmailAndPassword(email, password).then(function(result) {
              firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
              navigate('page-two')


              })
              .catch(function(error) {
              console.log("error")
              alert(error)
            })
            }).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // ...
            });

            /*;*/

          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputext: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
