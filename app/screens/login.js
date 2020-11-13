import React, { Component } from 'react';
import { Text, TextInput, Alert, Button, View, StyleSheet } from 'react-native';

import firebase from 'firebase/app'
import 'firebase/auth'
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
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
    const { username, password } = this.state;


    firebase.auth().signInWithEmailAndPassword(username, password).then(function(result) {

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
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
           label='Email'
          style={styles.input}
        />
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
            const { username, password } = this.state;


            firebase.auth().signInWithEmailAndPassword(username, password).then(function(result) {
            navigate('page-two')
            

            })
            .catch(function(error) {
            console.log("error")
            alert(error)
            });

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
