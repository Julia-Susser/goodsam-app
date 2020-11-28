import React, { Component } from 'react';
import { Text, Image, TextInput, Dimensions,TouchableOpacity, SafeAreaView, ScrollView, Alert, Button, View, StyleSheet } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import {app} from '../../../config';
import firebase from 'firebase/app'
import 'firebase/auth'
import IconEntypo from 'react-native-vector-icons/Entypo'
import styles from './volunteer-signup-css'
import PhoneInput from "react-native-phone-number-input";
import  AsyncStorage  from '@react-native-community/async-storage';
export default class VolunteerSignUp extends Component {

  constructor(props) {
    super(props);


    this.state = {
      opportunity: props.route.params.opportunity,
      date: props.route.params.date,
      managerName: props.route.params.managerName,
      managerEmail: props.route.params.managerEmail,
      type: props.route.params.type,
      description: props.route.params.description,
      name: "",
      email: "",
      phoneNumber: "",
      rname: "",
      remail: "",
      message: "",

    };
  }
  getEmailName=async ()=>{
      const email = await AsyncStorage.getItem('email')
      const name = await AsyncStorage.getItem('name')
      console.log(name)
      this.setState({ rname: name, remail: email, name: name, email: email})
      }
  send = (opportunity, date, name, email, phoneNumber, message, managerEmail) => {
    const db = app.database();
    db.ref('volunteer-signup').push({
      opportunity: opportunity,
      date: date,
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      message: message,
      managerEmail: managerEmail
    })
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
      <Text style={styles.header}>Sign up for {this.state.opportunity}{"\n"}Date: {this.state.date}</Text>

      <View style={styles.container}>

      <View style={{
        alignItems: 'center'
      }}>

      <View>
      <Text style={styles.title}>Name</Text>
      <TextInput
        value={this.state.name}
        onChangeText={(name) => this.setState({ name })}
        style={styles.input}
      />

      <Text style={styles.title}>Email</Text>
      <TextInput
        value={this.state.email}
        label='Email'
        style={styles.input}
      />

      <PhoneInput
      defaultCode="US"

      onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
      />





      <Text style={styles.title}>Message</Text>
      <TextInput
        onChangeText={(message) => this.setState({ message })}
        multiline={true}
        style={styles.text}
      />
      </View>
      </View>
        <TouchableOpacity
         style={styles.sectionContainer2}
         onPress={() => {

          var { opportunity, date, managerName, managerEmail, description, name, email, phoneNumber, message, remail, rname } = this.state;

         console.log(opportunity)
         if (date === undefined){
           date = ""
         }
         if (managerName === undefined){
           managerName = ""
         }
         if (phoneNumber.length < 10){
           alert("Please enter valid Phone Number")
         }
         if (name.length < 1){
           alert("Please enter valid Name")
         }
         const db = firebase.database();
         var nemail = remail.split(".")[0].toLowerCase()
         if (phoneNumber.length >= 10 && name.length > 1){
         db.ref('userIds/'+nemail).once('value', function(snapshot) {
           var key = snapshot.val()
           if (key != null){
             db.ref('users/'+key+"/"+opportunity+"_"+date).set({
               opportunity: opportunity,
               date: date,
               attending: true,
               name: name,
               email: email,
               phoneNumber: phoneNumber,
               message: message,
               managerEmail: managerEmail
             })

           }else{
             var user_ref = db.ref('users').push()
             var key = user_ref.key
             db.ref('userIds').update({[nemail]:key})
             db.ref('users/'+key+"/"+opportunity+"_"+date).set({
               opportunity: opportunity,
               date: date,
               attending: true,
               name: name,
               email: email,
               phoneNumber: phoneNumber,
               message: message,
               managerEmail: managerEmail
             })
           }

         });
         this.send(opportunity, date, name, email, phoneNumber, message, managerEmail)
         this.props.navigation.push("vsubmit", {
         opportunity: opportunity,
         date: date,
         attending: true,
         name: name,
         email: email,
         phoneNumber: phoneNumber,
         message: message,
         managerEmail: managerEmail
       }
       )
     }
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
