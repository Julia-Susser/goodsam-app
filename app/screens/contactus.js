import React, { Component } from 'react';
import { Text, TextInput, Dimensions,TouchableOpacity, SafeAreaView, Alert, Button, View, StyleSheet } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'

import firebase from 'firebase/app'
import 'firebase/auth'
export default class Contactus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      subject: '',

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
    return (
      <SafeAreaView style={styles.body}>

      <TouchableOpacity
       onPress={() => navigate('page-two')}>
         <IconAntDesign name="left" size={50}/>
      </TouchableOpacity>
      <Text style={styles.header}>Contact Us</Text>
      <View style={styles.container}>
      <Text style={styles.title}>Name</Text>

        <TextInput
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
           label='Name'
          style={styles.input}
        />
        <Text style={styles.title}>Email</Text>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
           label='Email'

          style={styles.input}
        />
        <Text style={styles.title}>Subject</Text>
        <TextInput
          value={this.state.subject}
          onChangeText={(subject) => this.setState({ password })}
          label='Subject'

          multiline={true}
          style={styles.input}
        />
        <Text style={styles.title}>Message</Text>
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          label='Password'
          multiline={true}
          style={styles.text}
        />
        <TouchableOpacity
         style={styles.sectionContainer2}
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
             alert(error)
             var errorCode = error.code;
             var errorMessage = error.message;
           });}}>
         <Text style={styles.Text}>Send Message</Text>
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
  title: {

  },
  header : {
    marginTop:height*.0,
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
  text: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    width:width*.85,
    height:150,
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
