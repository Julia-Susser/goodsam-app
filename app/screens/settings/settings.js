import React, { Component } from 'react';
import { Text, ScrollView, Image, TextInput, Dimensions,TouchableOpacity, SafeAreaView, Alert, Button, View, StyleSheet } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo'
import Textarea from 'react-native-textarea';
import {app} from '../../config';
import  AsyncStorage  from '@react-native-community/async-storage';
import styles from './settings-css'
export default class Settings extends Component {
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
    this.getEmailName()
    if (this.state.change === "Name"){
      this.setState({change: false})
    }else{
    this.setState({change: "Name"})
  }
  }
  startChangeEmail = () => {
    this.getEmailName()
    if (this.state.change === "Email"){
      this.setState({change: false})
    }else{
    this.setState({change: "Email"})
  }
  }
  startChangePassword = () => {
    this.getEmailName()
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
    <Text>Password for {this.state.remail}</Text>
    <TextInput
      onChangeText={(rpassword) => this.setState({ rpassword})}
      style={styles.input}
      secureTextEntry={true}
    />
    <Text>New Name for {this.rname}</Text>
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
    }
  }

  switchEmail = () => {
    async function saveNewEmail(email) {
      try {
        await AsyncStorage.setItem('email', email)
      } catch (err){
        console.log(err)
      }
    }
    if (this.state.new_email1.toLowerCase() === this.state.new_email2.toLowerCase()){
      var new_email = this.state.new_email1
      var remail = this.state.remail
      app.auth().signInWithEmailAndPassword(this.state.remail, this.state.rpassword).then(function(result) {
        app.auth().currentUser.updateEmail(new_email).then(function() {
          alert("successfully changed email to " + new_email)
          saveNewEmail(new_email)

          const db = app.database();
          var old_email = remail.split(".")[0].toLowerCase()
          new_email = new_email.split(".")[0].toLowerCase()
          console.log(old_email)
          db.ref('userIds/'+old_email).once('value', function(snapshot) {
            var key = snapshot.val()
            console.log(key)
            if (key != null){
              db.ref('userIds').update({[new_email]:key})
            db.ref('userIds/'+old_email).remove()

          }})


        }).catch(function(error) {
          console.log(error)
          alert(error)
        });
      }).catch(function(error) {
        console.log(error)
        alert(error)
      });
      this.setState({ change: "Email Updated"})

    }else{
      alert("Emails do not match.")
    }

  }
  switchPassword = () => {
    async function saveNewPassword(password) {
      try {
        await AsyncStorage.setItem('password', password)
      } catch (err){
        console.log(err)
      }
    }
    if (this.state.new_password1 === this.state.new_password2){
      var newPassword = this.state.new_password1
      app.auth().signInWithEmailAndPassword(this.state.remail, this.state.rpassword).then(function(result) {
        var user = app.auth().currentUser;
        user.updatePassword(newPassword).then(function() {
          saveNewPassword()
          alert("Successfully changed password")
        }).catch(function(error) {
          alert(error)
        });
      }).catch(function(error) {
        alert(error)
      });
      this.setState({ change: "Password Updated"})
    }else{
      alert("Emails do not match.")
    }
  }

  switchName = () => {
    async function saveNewName(name) {
      try {
        await AsyncStorage.setItem('name', name)
      } catch (err){
        console.log(err)
      }
    }
    if (this.state.new_name1 === this.state.new_name2){
      var newName = this.state.new_name1
      app.auth().signInWithEmailAndPassword(this.state.remail, this.state.rpassword).then(function(result) {
        var user = app.auth().currentUser;
        user.updateProfile({
          displayName: newName,
        }).then(function() {
          saveNewName(newName)
          alert("Successfully changed name to "+newName)
        }).catch(function(error) {
          alert(error)
        });
      }).catch(function(error) {
        alert(error)
      });
      this.setState({ change: "Name Updated"})
    }else{
      alert("Names do not match.")
    }
  }



  getEmailName=async ()=>{
    const email = await AsyncStorage.getItem('email')
    const name = await AsyncStorage.getItem('name')
    this.setState({ rname: name, remail: email, name: name, email: email})
    }
  send=async ()=>{
    const email = await AsyncStorage.getItem('email')
    const name = await AsyncStorage.getItem('name')
    this.props.navigation.navigate('home2', {name: name})

    }
    logout = async() => {
      try {
        await AsyncStorage.setItem('email', '')
        await AsyncStorage.setItem('name', '')
      } catch (err){

      }
    }
  componentDidMount() {
    this.getEmailName()

  }

  render() {
    const { navigate } = this.props.navigation;

    return (
<SafeAreaView style={styles.body}>
  <ScrollView>

    <TouchableOpacity style={{width: 40}} onPress={() => {
      this.send()
      }
    }>
      <IconEntypo name="chevron-thin-left" size={30}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {
      this.send()}}>
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

    <TouchableOpacity style={styles.Button} activeOpacity={1} onPress={() => {
    app.auth().signOut().then(function() {
    }).catch(function(error) {
    });
    this.logout()
    this.props.navigation.push('home2') }}>
      <Text style={styles.buttonText}>LogOut</Text>
    </TouchableOpacity>
    </View>

    {this.setForm()}
    <Text style={styles.margin}></Text>
  </ScrollView>
</SafeAreaView >
    );
  }
}
