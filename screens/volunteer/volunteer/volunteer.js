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
     email: ""
   };

  }

    send = (item )=>{
      this.props.navigation.push(item.page, {
      opportunity: item.Opportunity, date: item.Date, type: item.Type, managerName: item.ManagerName, description: item.Description}
    )
    }
    signedup = (item)=>{
      if (item.signup==="Attending"){
      return <Text style={styles.signedup}>{item.signup}</Text>
    }
    }
    button = (item)=>{
      if (item.signup==="Attending"){
      return <Text>Changes? Contact Us.</Text>
    }else{
      return item.signup
    }
    }
    color = (item)=>{
      if (item.signup==="Attending"){
      return "orange"
    }else{
      return "darkblue"
    }
    }
    getEmail=async ()=>{
      const email = await AsyncStorage.getItem('email')
      const name = await AsyncStorage.getItem('name')
      this.setState({email: email})

      }
  componentDidMount() {
    this.getEmail()
    fetch("https://sheets.googleapis.com/v4/spreadsheets/1qb3nY8_7PmjFfU1a6aJfYKS9AEV9Q1VXVc8WL0Mc6EE/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=AIzaSyAmwRJCnSaR3nv-jl24zsvZbUxzZhbbLkQ").then(response => response.json()).then(data => {
  let batchRowValues = data.valueRanges[0].values;
  const rows = [];
  for (let i = 1; i < batchRowValues.length; i++) {
    let rowObject = {};
    for (let j = 0; j < batchRowValues[i].length; j++) {
      rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
    }
    rows.push(rowObject);
  }
    const db = firebase.database();
    var nemail = this.state.email.split(".")[0]
    db.ref('userIds/'+nemail).once('value', querySnapShot => {
      db.ref('users/'+querySnapShot.val()).once('value', querySnapShot2 => {
        var dict = querySnapShot2.val()
        if (dict != null){
          for (var eventt in rows) {
              var opp = rows[eventt]["Opportunity"]
              var date = rows[eventt]["Date"]
              if (date === undefined){
                date = ""
              }
              opp = opp+"_"+date
              console.log(opp)
              if (dict[opp] != undefined){
                rows[eventt]["signup"] = "Attending"
                rows[eventt]["page"] = "contactus"

              }else{
                rows[eventt]["signup"] = "signup"
                rows[eventt]["page"] = "vsignup"
              }
            this.setState({ items: rows})
          }
        }else{

          for (var eventt in rows) {
              var opp = rows[eventt]["Opportunity"]
              rows[eventt]["signup"] = "signup"
              rows[eventt]["page"] = "vsignup"
              this.setState({ items: rows})
            }
        }
      });
    });
  });
  }
  //jsusser@urbanschool.org
  render(){

const listItems = this.state.items

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
        {this.signedup(item)}
        <TouchableOpacity
        style={styles.button}
        style={{
        backgroundColor: this.color(item),
        alignItems: 'center',
        height:60,
        width: 100,
        marginLeft:20,
        marginBottom: 10,
        justifyContent: 'center',}}
        onPress={() =>
          this.send(item)
          }>
        <Text style={styles.Text}>{this.button(item)}</Text>
        </TouchableOpacity></View>)}

      </View>
      </ScrollView>
      </SafeAreaView>
    )
  }
}
