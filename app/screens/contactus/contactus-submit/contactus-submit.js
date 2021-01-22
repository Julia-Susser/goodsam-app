import React, {Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  Linking,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import firebase from 'firebase/app'
import 'firebase/auth'
import IconEntypo from 'react-native-vector-icons/Entypo'
import {app} from '../../../config';
import styles from './contactus-submit-css'
import  AsyncStorage  from '@react-native-community/async-storage';
export default class ContactusSubmit extends Component{
  getEmailName=async ()=>{
      const email = await AsyncStorage.getItem('email')
      const name = await AsyncStorage.getItem('name')
      this.setState({ rname: name, remail: email, name: name, short_name:name.split(" ")[0], email: email})
      }

  componentDidMount() {
    this.getEmailName()
  }
  constructor(props) {
    super(props);
    this.state = {
     name:[]
    };
  }
  render(

  ){
    return (
<SafeAreaView style={styles.body}>
  <TouchableOpacity style={{width: 40}} onPress={() => this.props.navigation.navigate('home2')}>
    <IconEntypo name="chevron-thin-left" size={30}/>
  </TouchableOpacity>



  <TouchableOpacity
   onPress={() => this.props.navigation.navigate('home2')}>
  <View style={styles.imgContainer}>
    <Image style={styles.Image} source={require('../../photos/logo1.png')}/>
    <Image style={styles.Image2} source={require('../../photos/logo2.png')}/>
    <Text style={styles.welcome}> Thanks for submitting, {this.state.short_name}</Text>
  </View>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.Button, styles.donate]} onPress={() => Linking.openURL('https://goodsamfrc.org/donate/')}>
    <Text style={styles.Text}>Donate</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.Button, styles.volunteer]} onPress={() => this.props.navigation.push('volunteer')}>
    <Text style={styles.Text}>Volunteer</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.Button, styles.contactus]} onPress={() => this.props.navigation.push('contactus')}>
    <Text style={styles.Text}>ContactUs</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.Button, styles.instagram]} onPress={() => this.props.navigation.push('instagram')}>
    <Text style={styles.Text}>Instagram</Text>
  </TouchableOpacity>


</SafeAreaView >
    )
  }
}
