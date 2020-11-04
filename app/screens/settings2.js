import React, { Component } from 'react';
import { Text, ScrollView, Image, TextInput, Dimensions,TouchableOpacity, SafeAreaView, Alert, Button, View, StyleSheet } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo'
import Textarea from 'react-native-textarea';
import {app} from '../config';
export default class Contactus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rname: "",
      remail: "",
      changeName: false,
      new_name1: "",
      new_name2: "",
      changeEmail: false,
      new_email1: "",
      new_email2: "",
      reset_password_sent: false,
      RPsent: false,
      reset_RP: false,

    };
  }
  startChangeName = () => {
    this.setState({changeName: !this.state.changeName})

  }

  changeName = () => {
    if (this.state.changeName){
      return(
    <View style={styles.container}>
      <TextInput
        onChangeText={(new_name1) => this.setState({ new_name1 })}
        style={styles.input}
      />
      <TextInput
        onChangeText={(new_name2) => this.setState({ new_name2 })}
        style={styles.input}
      />
      <TouchableOpacity style={styles.saveButton} activeOpacity={1} onPress={() => { this.sendPasswordResetEmail() }}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>)
    }
  }

  startChangeEmail = () => {
    this.setState({changeEmail: !this.state.changeEmail})
  }
  switchEmail = () => {
    if (this.state.new_email1 === this.state.new_email2){
      app.auth().currentUser.updateEmail("userssss@example.com").then(function() {
        // Update successful.
      }).catch(function(error) {
        console.log(error)
      });
      var user = app.auth().currentUser;

      if (user != null) {
        var name = user.displayName;
        var email = user.email;
      }else{

      }
      console.log("cool"+email)
    }else{
      alert("Emails do not match.")
    }
  }


  changeEmail = () => {
    if (this.state.changeEmail){
      return(
    <View style={styles.container}>
      <View>
      <Text>Email</Text>
      <TextInput
        onChangeText={(new_email1) => this.setState({ new_email1 })}
        style={styles.input}
      />
      <Text>Repeat Email</Text>
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
  }

  reset_password_text = () => {

    if (!this.state.RPsent){

      return ("Send Password Reset Email")
    }else{
      return ("Password Reset Email")
    }
  }

  passwordReset = () => {
    if (this.state.RPsent){
      this.setState({ reset_RP: !this.state.reset_RP})
    }else{
      alert("Reset Password Email Sent to "+ this.state.remail)
      this.setState({ RPsent: true, reset_RP: true})
      this.sendPasswordResetEmail()
    }
  }
  sendPasswordResetEmail = () => {

    app.auth().sendPasswordResetEmail(this.state.remail).then(function() {

    }).catch(function(error) {
      // An error happened.
    });
  }
  passwordResetFinished = () => {

    if (this.state.reset_RP){
      return(
        <TouchableOpacity style={styles.saveButton} activeOpacity={1} onPress={() => { this.sendPasswordResetEmail() }}>
          <Text style={styles.buttonText}>Did Not Recieve email? Resend!</Text>
        </TouchableOpacity>
      )
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
        <Image style={styles.logo} source={require('./photos/logo1.png')}/>
        <Image style={styles.logo2} source={require('./photos/logo2.png')}/>
      </View>
    </TouchableOpacity>

    <Text style={styles.header}>Settings</Text>

    <View style={styles.container}>
    <TouchableOpacity style={styles.Button} activeOpacity={1} onPress={() => { this.startChangeName() }}>
      <Text style={styles.buttonText}>Change Your Name</Text>
    </TouchableOpacity>

    {this.changeName()}


    <TouchableOpacity style={styles.Button} activeOpacity={1} onPress={() => { this.startChangeEmail() }}>
      <Text style={styles.buttonText}>Change Your Email</Text>
    </TouchableOpacity>

    {this.changeEmail()}

    <TouchableOpacity style={styles.Button} activeOpacity={1} onPress={() => { this.passwordReset() }}>
      <Text style={styles.buttonText}>{this.reset_password_text()}</Text>
    </TouchableOpacity>

    {this.passwordResetFinished()}

    <TouchableOpacity style={styles.Button} activeOpacity={1} onPress={() => { this.props.navigation.navigate('signInOptions') }}>
      <Text style={styles.buttonText}>LogOut</Text>
    </TouchableOpacity>
    </View>

  </ScrollView>
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
  logo : {
    width: width *.5,
    height:height*.06,
    resizeMode: 'contain',
    paddingBottom: 0,
    marginTop:-20,
  },
  imgContainer: {
    alignItems:'center'
  },
  logo2 : {
    marginTop:0,
    height:height*.06,
    width: width *.9,
    resizeMode: 'contain'
  },
  header : {
    marginTop:height*.0,
    marginLeft: width*.07,
    marginBottom: 10,
    marginTop: 20,
    color: '#840404',
    fontWeight:'bold',
    fontSize: 35,
  },
  input: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
    width:width*.85,
    height:60,
  },
  Button : {
      alignItems: 'center',
      height:60,
      width: width * .7,
      marginBottom: 20,
      backgroundColor: '#840404',
      justifyContent: 'center',
  },
  saveButton : {
      alignItems: 'center',
      height:60,
      width: width * .4,
      marginBottom: 20,
      backgroundColor: '#fb8c00',
      justifyContent: 'center',
  },
  body: {
    width:width,
    height:height,
    backgroundColor: 'white',
  },
  buttonText : {
    fontWeight: "bold",
    color: "white"
  }

});
