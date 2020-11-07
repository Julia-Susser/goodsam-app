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
import styles from './volunteer-submit-css'
import  AsyncStorage  from '@react-native-community/async-storage';
export default class ContactusSubmit extends Component{
  getName=async ()=>{
    const email = await AsyncStorage.getItem('email')
    const name = await AsyncStorage.getItem('name')
    this.setState({ name: name})
    }
  componentDidMount() {
    this.getName()
  }
  constructor(props) {
    super(props);
    this.state = {
    oppurtunity: props.route.params.oppurtunity,
     name:""
    };
  }
  render(

  ){
    return (
<SafeAreaView style={styles.body}>
  <TouchableOpacity style={{width: 40}} onPress={() => this.props.navigation.navigate('home2')}>
    <IconEntypo name="chevron-thin-left" size={30}/>
  </TouchableOpacity>



  <View style={styles.imgContainer}>
    <Image style={styles.Image} source={require('../../photos/logo1.png')}/>
    <Image style={styles.Image2} source={require('../../photos/logo2.png')}/>
    <Text style={styles.welcome}> Thanks for submiting, {this.state.name}</Text>
  </View>

  <TouchableOpacity style={[styles.Button, styles.donate]} onPress={() => Linking.openURL('https://goodsamfrc.org/donate/')}>
    <Text style={styles.Text}>Donate</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.Button, styles.volunteer]} onPress={() => this.props.navigation.push('contactus')}>
    <Text style={styles.Text}>Contact Us</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.Button, styles.instagram]} onPress={() => this.props.navigation.push('instagram')}>
    <Text style={styles.Text}>Instagram</Text>
  </TouchableOpacity>


</SafeAreaView >
    )
  }
}
