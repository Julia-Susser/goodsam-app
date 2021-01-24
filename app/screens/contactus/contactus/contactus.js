import React, { Component } from 'react';
import { Text, ScrollView, Image, TextInput, Dimensions,TouchableOpacity, SafeAreaView, Alert, Button, View, StyleSheet } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo'
import Textarea from 'react-native-textarea';
import {app} from '../../../config';
import  AsyncStorage  from '@react-native-community/async-storage';
import styles from './contactus-css'
export default class Contactus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      rname: "",
      remail: "",

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
  getEmailName=async ()=>{
      const email = await AsyncStorage.getItem('email')
      const name = await AsyncStorage.getItem('name')
      if (name != null && email != null){
        this.setState({ rname: name, remail: email, name: name, email: email})
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
      <TouchableOpacity
        style={{width: 40}}
       onPress={() => this.props.navigation.navigate('home2')}>
         <IconEntypo name="chevron-thin-left" size={30}/>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => this.props.navigation.navigate('home2')}>
        <View style={styles.imgContainer}>
          <Image style={styles.logo} source={require('../../photos/logo1.png')}/>
          <Image style={styles.logo2} source={require('../../photos/logo2.png')}/>
        </View>
      </TouchableOpacity>
      <Text style={styles.header}>Contact Us</Text>
      <View style={styles.container}>
      <View style={styles.view}>

        <Text style={styles.title}>Name</Text>
        <TextInput
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          style={styles.input}
        />

        <Text style={styles.title}>Email</Text>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          style={styles.input}
        />

        <Text style={styles.title}>Subject</Text>
        <TextInput
          value={this.state.subject}
          onChangeText={(subject) => this.setState({ subject })}
          multiline={false}
          style={styles.input}
        />

        <Text style={styles.title}>Message</Text>
        <TextInput
          onChangeText={(message) => this.setState({ message })}
          multiline={true}
          style={styles.text}
        />
        </View>
        <TouchableOpacity
         style={styles.sectionContainer2}
         onPress={() => {
           const { name, email, subject, message} = this.state;
           if (email.length < 1){
             alert("Please fill out your email.")
           }
           if (name.length < 1){
             alert("Please fill out your name.")
           }
           if (name.length < 5 && name.length >0){
             alert("First and Last Name must be more than 5 characters.")
           }
           if (subject.length < 10){
             alert("Subject must be more than 10 characters")
           }
           if (message.length < 20){
             alert("Message must be more the 20 characters.")
           }

           if (subject.length >= 10 && message.length >= 20 && email.length >= 1 && name.length >= 5){
           this.send(name, email, subject, message)
           this.props.navigation.push("csubmit")}
           }}>
         <Text style={styles.Text}>Send Message</Text>
       </TouchableOpacity>
       <Text style={styles.margin}></Text>
      </View>
      </ScrollView>
      </SafeAreaView >
    );
  }
}
