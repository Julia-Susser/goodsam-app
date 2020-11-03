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
import {app} from '../../config';
import IconEntypo from 'react-native-vector-icons/Entypo'
export default class Volunteer extends Component{
  constructor(props) {
    super(props);
    this.state = {
     items:[],
     key : ""
   };

  }

    send = (item )=>{
      this.props.navigation.push(item.page, {
      oppurtunity: item.Oppurtunity, date: item.Date, type: item.Type, managerName: item.ManagerName, description: item.Description}
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
  componentDidMount() {
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
//<Table style={styles.table} borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}><Rows data={[[`Oppurtunity: ${item.Oppurtunity}`],[`Date: ${item.Date}`],[`Type: ${item.Type}`]]}/></Table>

    var user = firebase.auth().currentUser;

    if (user != null) {
      var name = user.displayName;
      var email = user.email;
    }

    const db = firebase.database();
    var nemail = email.split(".")[0]
    var userId = firebase.auth().currentUser.uid;
    db.ref('userIds/'+nemail).once('value', querySnapShot => {
      db.ref('users/'+querySnapShot.val()).once('value', querySnapShot2 => {
        var dict = querySnapShot2.val()
        if (dict != null){
          for (var eventt in rows) {
              var opp = rows[eventt]["Oppurtunity"]
              console.log(opp)
              if (dict[opp] != undefined){
                rows[eventt]["signup"] = "Attending"
                rows[eventt]["page"] = "contactus"
                console.log(rows[eventt])
              }else{
                rows[eventt]["signup"] = "signup"
                rows[eventt]["page"] = "vsignup"
              }
              this.setState({ items: rows})
          }
        }else{

          for (var eventt in rows) {
              var opp = rows[eventt]["Oppurtunity"]
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
       onPress={() => this.props.navigation.navigate('page-two')}>
         <IconEntypo name="chevron-thin-left" size={30}/>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => this.props.navigation.navigate('page-two')}>
        <View style={styles.imgContainer}>
          <Image style={styles.logo} source={require('../photos/logo1.png')}/>
          <Image style={styles.logo2} source={require('../photos/logo2.png')}/>
        </View>
      </TouchableOpacity>
      <View>
      {listItems.map(item => <View style={styles.box} key={item.Oppurtunity}>
        <Text style={styles.text}>Oppurtunity: {item.Oppurtunity}{"\n"}</Text>
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
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  body: {

    height:height,
    backgroundColor: 'white',
  },
  logo : {
    width: width *.5,
    height:30,
    height:height*.1,
    resizeMode: 'contain',
    paddingBottom: 0,
  },
  imgContainer: {
    alignItems:'center'
  },
  logo2 : {
    marginTop:0,
    height:height*.1,
    width: width *.9,
    resizeMode: 'contain'
  },
  table : {
    marginTop:40,
  },
  Text : {
    color: 'white',
    fontWeight:'bold',
    textAlign: 'center',
  },
  button : {
      borderRadius: 0,
      alignItems: 'center',
      height:60,
      width: 100,
      marginLeft:20,
      marginBottom: 10,
      justifyContent: 'center',

  },
  box:{
    backgroundColor: '#fff',
          borderRadius: 4,
          borderWidth: 0.5,
          borderColor: '#000',

          margin: 20,
  },
  body: {

    height:height,
    backgroundColor: 'white',
  },
  signedup :{
    fontSize: 17,
    color: "orange",
    fontWeight:'bold',
    padding: 20,
  },
  text: {

    fontSize: 15,
    paddingLeft: 10,
    paddingBottom:0,
    marginBottom: 0,
  }

});
