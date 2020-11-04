import React, { Component } from 'react';
import { Text, ScrollView, Image, TextInput, Dimensions,TouchableOpacity, SafeAreaView, Alert, Button, View, StyleSheet } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo'
import Textarea from 'react-native-textarea';
import {app} from '../../../config';
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
  componentDidMount() {
    var user = app.auth().currentUser;

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
        style={{width: 40}}
       onPress={() => this.props.navigation.navigate('home')}>
         <IconEntypo name="chevron-thin-left" size={30}/>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => this.props.navigation.navigate('home')}>
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
           this.send(name, email, subject, message)
           this.props.navigation.push("csubmit")
           }}>
         <Text style={styles.Text}>Send Message</Text>
       </TouchableOpacity>
      </View>
      </ScrollView>
      </SafeAreaView >
    );
  }
}
