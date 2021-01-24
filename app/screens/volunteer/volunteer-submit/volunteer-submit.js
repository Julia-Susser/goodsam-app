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
    opportunity: props.route.params.opportunity,
     name:""
    };
  }
  render(

  ){
    return (
<SafeAreaView style={styles.body}>
<ScrollView>

  <TouchableOpacity style={{width: 40}} onPress={() => this.props.navigation.push('home2')}>
    <IconEntypo name="chevron-thin-left" size={30}/>
  </TouchableOpacity>


  <TouchableOpacity
   onPress={() => this.props.navigation.push('home2')}>
  <View style={styles.imgContainer}>
    <Image style={styles.Image} source={require('../../photos/logo1.png')}/>
    <Image style={styles.Image2} source={require('../../photos/logo2.png')}/>


  </View>

  </TouchableOpacity>
  <Text style={styles.welcome}>Thanks for volunteering for {"\n"}{this.state.opportunity}, {"\n"}{this.state.name.split(" ")[0]}</Text>
  <TouchableOpacity style={[styles.Button, styles.instagram]} onPress={() => this.props.navigation.push('home2')}>
    <Text style={styles.Text}>Home</Text>
  </TouchableOpacity>

</ScrollView>


</SafeAreaView >
    )
  }
}
