import React, { Component } from 'react';
import { Text, TextInput, Dimensions,TouchableOpacity, SafeAreaView, ScrollView, Alert, Button, View, StyleSheet } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import {app} from '../../config';
import firebase from 'firebase/app'
import 'firebase/auth'
export default class VolunteerSignUp extends Component {

  constructor(props) {
    super(props);


    this.state = {
      oppurtunity: props.route.params.oppurtunity,
      date: props.route.params.date,
      managerName: props.route.params.managerName,
      type: props.route.params.type,
      description: props.route.params.description,
      name: "jj",
      email: "",
      phoneNumber: "",
      rname: "",
      remail: "",
      message: "",
      text: 'Useless Placeholder'
    };
  }
  componentDidMount() {

    var user = firebase.auth().currentUser;

    if (user != null) {
      var name = user.displayName;
      var email = user.email;
    }else{

    }
    this.setState({ rname: name, remail: email, name: name, email: email})

  }


  render() {

    const { navigate } = this.props.navigation;

    return (
      <SafeAreaView style={styles.body}>
      <ScrollView>
      <TouchableOpacity
       onPress={() => navigate('volunteer')}>
         <IconAntDesign name="left" size={50}/>
      </TouchableOpacity>
      <View style={styles.container}>
      <Text style={styles.header}>Sign up for {this.state.oppurtunity}</Text>

      <View style={{
        alignItems: 'center'
      }}>
      <View>
      <Text>Date: {this.state.date}</Text>
      <Text>Manager Name: {this.state.date}</Text>
      <Text>{this.state.description}</Text>
      </View>
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
        onChangeText={(email) => this.setState({ email })}
         label='Email'
        style={styles.input}
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
           const { oppurtunity, date, description, name, email, phoneNumber, message, remail, rname } = this.state;
           const db = firebase.database();
           var nemail = remail.split(".")[0]
           db.ref('userIds/'+nemail).once('value', function(snapshot) {
             var key = snapshot.val()
             if (key != null){
               db.ref('users/'+key+"/"+oppurtunity).set({
                 oppurtunity: oppurtunity,
                 date: date,
                 attending: true,
                 name: name,
                 email: email,
                 phoneNumber: phoneNumber,
                 message: message
               })

             }else{
               var user_ref = db.ref('users').push()
               var key = user_ref.key
               db.ref('userIds').update({[nemail]:key})
               db.ref('users/'+key+"/"+oppurtunity).set({
                 oppurtunity: oppurtunity,
                 date: date,
                 attending: true,
                 name: name,
                 email: email,
                 phoneNumber: phoneNumber,
                 message: message
               })
             }
             navigate("page-two")
           });
          }}>
         <Text style={styles.Text}>Send Message</Text>
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
    width:width*.85,
    height:60,
  },
  text: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
    width:width*.85,
    height:150,
    textAlignVertical: 'top',
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
