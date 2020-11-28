import React, {Component} from 'react'
import { Table, Row, Rows } from 'react-native-table-component'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Hr,
  Text,
  Button,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import  AsyncStorage  from '@react-native-community/async-storage';
import firebase from 'firebase/app'
import 'firebase/auth'
import {app} from '../../../config';
import IconEntypo from 'react-native-vector-icons/Entypo'
import styles from './volunteer-css'
export default class Volunteer extends Component{
  constructor(props) {
    super(props);
    this.state = {
     items:[],
     key : "",
     email: "",
     dict: ""
   };

  }

    getEmail=async ()=>{
      const email = await AsyncStorage.getItem('email')
      const name = await AsyncStorage.getItem('name')
      this.setState({email: email})

      }
    firebase=async ()=>{
      const email = await AsyncStorage.getItem('email')

      const db = firebase.database();
      var nemail = email.split(".")[0].toLowerCase()
      console.log(nemail)

      db.ref('userIds/'+nemail).once('value', querySnapShot => {
        db.ref('users/'+querySnapShot.val()).once('value', querySnapShot2 => {
          var dict = querySnapShot2.val()
          this.setState({dict:dict})
        })

      });

      }
  componentDidMount() {
this.getEmail()
const db = firebase.database();
db.ref('google_sheets/').once('value', querySnapShot => {
  
  fetch("https://sheets.googleapis.com/v4/spreadsheets/"+querySnapShot.val().sheet_id+"/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key="+querySnapShot.val().access_token).then(response => response.json()).then(data => {
  let batchRowValues = data.valueRanges[0].values;
  const rows = [];
  for (let i = 1; i < batchRowValues.length; i++) {
    let rowObject = {};
    for (let j = 0; j < batchRowValues[i].length; j++) {
      rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
    }
    rows.push(rowObject);
  }
  this.setState({ items: rows})
  });
})
  this.firebase()
  }
  signedup = (item, dict) => {
    if (this.check(item,dict) != undefined){
      return (<Text style={styles.signedup}>Attending</Text>)
  }
  }
  button = (item, dict) => {
  if (this.check(item,dict) != undefined){
    return (<Text>Contactus</Text>)
  }
  return (<Text>Sign Up</Text>)
  }
color = (item, dict)=>{
  if (this.check(item,dict) != undefined){
    return ("orange")
  }
  return ("darkblue")
  }
check = (item,dict) => {
    if (dict != null){
      var opp = item.Opportunity
      var date = item.Date
      if (date === undefined){
        date = ''
      }
      opp = opp+"_"+date
      return(dict[opp])
    }
    return(undefined)
  }
send = (item,dict)=>{
  if (this.check(item,dict) != undefined){
    this.props.navigation.push(
      "contactus")
  }else{
    this.props.navigation.push(
      "vsignup", {
    opportunity: item.Opportunity, date: item.Date, type: item.Type, managerName: item.ManagerName, managerEmail: item.ManagerEmail, description: item.Description})
  }
  }
  render(){

const listItems = this.state.items
const dict = this.state.dict
console.log(dict)

    return (

      <SafeAreaView style={styles.body}>
      <ScrollView

        style={styles.scrollView}>
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
      <View>
      {listItems.map(item => <View style={styles.box} key={item.Opportunity}>
        <Text style={styles.text}>Opportunity: {item.Opportunity}{"\n"}</Text>
        <Text style={styles.text}>Date: {item.Date}{"\n"}</Text>
        <Text style={styles.text}>Type: {item.Type}{"\n"}</Text>
        <Text style={styles.text}>Manager Name: {item.ManagerName}{"\n"}</Text>
        <Text style={styles.text}>Description: {item.Description}{"\n"}</Text>
        {this.signedup(item, dict)}
        <TouchableOpacity
        style={[styles.button, {backgroundColor: this.color(item, dict)}]}
        onPress={() =>
          this.send(item,dict)
          }>
        <Text style={styles.Text}>{this.button(item,dict)}</Text>
        </TouchableOpacity>
        </View>)}

      </View>
      </ScrollView>
      </SafeAreaView>
    )
  }
}
