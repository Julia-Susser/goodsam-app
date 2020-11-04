import React, { Component } from 'react';
import { Text, ScrollView, Image, TextInput, Dimensions,TouchableOpacity, SafeAreaView, Alert, Button, View, StyleSheet } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo'
import Textarea from 'react-native-textarea';
import {app} from '../../config';
import styles from './settings-css'
export default class Contactus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rname: "",
      remail: "",
      change: false,
      new_name1: "",
      new_name2: "",
      new_email1: "",
      new_email2: "",
      rpassword: "",
      new_password1: "",
      new_password2: "",

    };
  }
  startChangeName = () => {
    if (this.state.change === "Name"){
      this.setState({change: false})
    }else{
    this.setState({change: "Name"})
  }
  }
  startChangeEmail = () => {
    if (this.state.change === "Email"){
      this.setState({change: false})
    }else{
    this.setState({change: "Email"})
  }
  }
  startChangePassword = () => {
    if (this.state.change === "Password"){
      this.setState({change: false})
    }else{
    this.setState({change: "Password"})
  }
}

  changeName = () => {
      return(
    <View style={styles.container}>
    <View>
    <Text>New Name for {this.state.rname}</Text>
    <Text>New Name</Text>
      <TextInput
        onChangeText={(new_name1) => this.setState({ new_name1 })}
        style={styles.input}
      />

      <Text>Repeat New Name</Text>
      <TextInput
        onChangeText={(new_name2) => this.setState({ new_name2 })}
        style={styles.input}
      />
    </View>

      <TouchableOpacity style={styles.saveButton} activeOpacity={1} onPress={() => { this.switchName() }}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>)

  }

  changeEmail = () => {
      return(
    <View style={styles.container}>
      <View>
      <Text>Password for {this.state.remail}</Text>
      <TextInput
        onChangeText={(rpassword) => this.setState({ rpassword})}
        style={styles.input}
        secureTextEntry={true}
      />
      <Text>New Email</Text>
      <TextInput
        onChangeText={(new_email1) => this.setState({ new_email1 })}
        style={styles.input}
      />
      <Text>Repeat New Email</Text>
      <TextInput
        onChangeText={(new_email2) => this.setState({ new_email2 })}
        style={styles.input}
      />
      </View>
      <TouchableOpacity style={styles.saveButton} activeOpacity={1} onPress={() => { this.switchEmail() }}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

    </View>)

  }

  changePassword = () => {
      return(
    <View style={styles.container}>
      <View>
      <Text>Current Password for {this.state.remail}</Text>
      <TextInput
        onChangeText={(rpassword) => this.setState({ rpassword})}
        style={styles.input}
        secureTextEntry={true}
      />
      <Text>New Password</Text>
      <TextInput
        onChangeText={(new_password1) => this.setState({ new_password1 })}
        style={styles.input}
      />
      <Text>Repeat Password</Text>
      <TextInput
        onChangeText={(new_password2) => this.setState({ new_password2 })}
        style={styles.input}
      />
      </View>
      <TouchableOpacity style={styles.saveButton} activeOpacity={1} onPress={() => { this.switchPassword() }}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

    </View>)

  }

  setForm = () => {

    if (this.state.change === "Name"){
      return (this.changeName())
    }else if (this.state.change === "Email"){
      return (this.changeEmail())
    }else if (this.state.change === "Password"){
      return (this.changePassword())
    }else if (this.state.change === "Email Updated"){
      return (<Text>Email has been updated to {this.state.remail}</Text>)
    }else if (this.state.change === "Name Updated"){
      return (<Text>Name has been updated to {this.state.rname}</Text>)
    }else if (this.state.change === "Password Updated"){
      return (<Text>Password has been updated, {this.state.rname}</Text>)
    }
  }

  switchEmail = () => {
    if (this.state.new_email1 === this.state.new_email2){
      app.auth().signInWithEmailAndPassword(this.state.remail, this.state.rpassword).then(function(result) {
      }).catch(function(error) {
        console.log(error)
      });
      app.auth().currentUser.updateEmail(this.state.new_email1).then(function() {
      }).catch(function(error) {
        console.log(error)
      });
      this.setState({ change: "Email Updated", remail: this.state.new_email1})
      console.log(this.state.change)

    }else{
      alert("Emails do not match.")
    }
  }
  switchPassword = () => {
    if (this.state.new_password1 === this.state.new_password2){
      app.auth().signInWithEmailAndPassword(this.state.remail, this.state.rpassword).then(function(result) {
      }).catch(function(error) {
        console.log(error)
      });
      var user = app.auth().currentUser;
      var newPassword = this.state.new_password1
      console.log(newPassword)
      user.updatePassword(newPassword).then(function() {
        // Update successful.
      }).catch(function(error) {
        // An error happened.
        console.log(error)
      });
      this.setState({ change: "Password Updated"})
      console.log(this.state.change)

    }else{
      alert("Emails do not match.")
    }
  }
  switchName = () => {
    if (this.state.new_name1 === this.state.new_name2){
      var user = app.auth().currentUser;
      user.updateProfile({

        displayName: this.state.new_name1,
      }).then(function() {
        console.log(user.displayName)

      }).catch(function(error) {
        // An error happened.
      });

      this.setState({ change: "Name Updated", rname: this.state.new_name1})
    }
  }




  componentDidMount() {

    var user = app.auth().currentUser;
    if (user != null) {
      var name = user.displayName;
      var email = user.email;
    }else{

    }
    this.setState({ rname: name, remail: email})


  }

  render() {
    const { navigate } = this.props.navigation;

    return (
<SafeAreaView style={styles.body}>
  <ScrollView>

    <TouchableOpacity style={{width: 40}} onPress={() => this.props.navigation.navigate('home')}>
      <IconEntypo name="chevron-thin-left" size={30}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => this.props.navigation.navigate('home')}>
      <View style={styles.imgContainer}>
        <Image style={styles.logo} source={require('../photos/logo1.png')}/>
        <Image style={styles.logo2} source={require('../photos/logo2.png')}/>
      </View>
    </TouchableOpacity>

    <Text style={styles.header}>Settings</Text>

    <View style={styles.container}>
    <TouchableOpacity style={styles.Button} activeOpacity={1} onPress={() => { this.startChangeName() }}>
      <Text style={styles.buttonText}>Change Your Name</Text>
    </TouchableOpacity>


    <TouchableOpacity style={styles.Button} activeOpacity={1} onPress={() => { this.startChangeEmail() }}>
      <Text style={styles.buttonText}>Change Your Email</Text>
    </TouchableOpacity>


    <TouchableOpacity style={styles.Button} activeOpacity={1} onPress={() => { this.startChangePassword() }}>
      <Text style={styles.buttonText}>{"Reset Password"}</Text>
    </TouchableOpacity>



    <TouchableOpacity style={styles.Button} activeOpacity={1} onPress={() => { this.props.navigation.navigate('signInOptions') }}>
      <Text style={styles.buttonText}>LogOut</Text>
    </TouchableOpacity>
    </View>

    {this.setForm()}

  </ScrollView>
</SafeAreaView >
    );
  }
}
