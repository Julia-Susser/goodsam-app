import React, { Component } from 'react';
import { Text, TextInput, ScrollView, Dimensions,TouchableOpacity, SafeAreaView, Alert, Button, View, StyleSheet } from 'react-native';
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
      sent: false,

    };
  }
  componentDidMount() {
  }
  forgotPassword = () =>{
    var email = this.state.email
    app.auth().sendPasswordResetEmail(email).then(function() {
      alert("Sent Reset Password Link to " +email)
    }).catch(function(error) {
      alert("Could not send Reset Password Link to " +email + "\n"+error)
    });
    this.setState({sent:true})
  }
  resetText1 = () =>{
    if (!this.state.sent){
    return("Forgot your ")
  }else{
    return("Didn't Recieve an email? ")
  }
  }
  resetText2 = () =>{
    if (!this.state.sent){
    return("password?")
  }else{
    return("Send Again.")
  }
}
  render() {
    const { navigation } = this.props;
    async function saveLoginInfo(navigation,page, name, email, password, id) {
      try {


        await AsyncStorage.setItem('email', email)
        await AsyncStorage.setItem('name', name)
        await AsyncStorage.setItem('password', password)
        await AsyncStorage.setItem('id', id)
        console.log(name)
        navigation.push(page)
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

  <Text style={styles.header}>Log In</Text>
  <View style={styles.container}>
    <TextInput
    value={this.state.email}
    onChangeText={(email) => this.setState({ email })}
    placeholder="Email..."
    style={styles.input}
    />
    <TextInput
    value={this.state.password}
    onChangeText={(password) => this.setState({ password })}
    placeholder="Password..."
    secureTextEntry={true}
    style={styles.input}
    />


    <TouchableOpacity
    style={styles.sectionContainer2}
    onPress={() => {
    const { email, password } = this.state;
    var page = this.props.route.params.page
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
    var user = app.auth().currentUser;
    if (user != null) {
        var name = user.displayName;
        var email = user.email;
        var id = user.uid
    }
    saveLoginInfo(navigation, page, name, email, password, id)

    })
    .catch(function(error) {
    console.log("error")
    alert(error)
    });}}>
      <Text style={styles.Text}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {this.forgotPassword()}}>
    <Text style={styles.forgot}> {this.resetText1()}

        <Text style={{textDecorationLine: 'underline',}}>{this.resetText2()}</Text>

    </Text>
    </TouchableOpacity>

  </View>
  </ScrollView>
</SafeAreaView >
    );
  }
}
