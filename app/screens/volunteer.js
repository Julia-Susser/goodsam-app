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
  TouchableOpacity,
} from 'react-native';
import  AsyncStorage  from '@react-native-community/async-storage';
import firebase from 'firebase/app'
import 'firebase/auth'
import {app} from '../config';
import IconEntypo from 'react-native-vector-icons/Entypo'
export default class Volunteer extends Component{
  constructor(props) {
    super(props);
    this.state = {
     items:[],
     key : ""
   };

  }
  get_key = ()=>{

    /*db.ref('userIds/'+nemail).on('value', function(snapshot) {
        var key = snapshot.val()
        console.log(key)
        this.setState({key : key})
      });*/


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
  var w = ''
  var listItems = []
  var datee = ''
  var time = ''
  var raw_list = [];
  var w = ''
//<Table style={styles.table} borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}><Rows data={[[`Oppurtunity: ${item.Oppurtunity}`],[`Date: ${item.Date}`],[`Type: ${item.Type}`]]}/></Table>


    this.setState({ items: rows})
    var user = firebase.auth().currentUser;

    if (user != null) {
      var name = user.displayName;
      var email = user.email;
    }

    const db = firebase.database();
    var nemail = email.split(".")[0]
    var userId = firebase.auth().currentUser.uid;
    db.ref('userIds/'+nemail).on('value', querySnapShot => {
      console.log(rows)

      db.ref('users/'+querySnapShot.val()).on('value', querySnapShot2 => {
        var dict = querySnapShot2.val()
        /*for (const [key, value] of Object.entries(dict)) {
          console.log(value["oppurtunity"]);
        }*/

      });
    });


  });

  }
  //jsusser@urbanschool.org
  render(){

const listItems = this.state.items
console.log("hey" + this.state.key)



    return (

      <SafeAreaView>
      <ScrollView

        style={styles.scrollView}>
      <TouchableOpacity
       onPress={() => this.props.navigation.navigate('page-two')}>
         <IconEntypo name="chevron-thin-left" size={30}/>
      </TouchableOpacity>
      <View>
      {listItems.map(item => <View style={styles.box} key={item.Oppurtunity}>
        <Text style={styles.text}>Oppurtunity: {item.Oppurtunity}{"\n"}</Text>
        <Text style={styles.text}>Date: {item.Date}{"\n"}</Text>
        <Text style={styles.text}>Type: {item.Type}{"\n"}</Text>
        <Text style={styles.text}>Manager Name: {item.ManagerName}{"\n"}</Text>
        <Text style={styles.text}>Description: {item.Description}{"\n"}</Text>

        <TouchableOpacity
        style={styles.sectionContainer2}
        onPress={() => this.props.navigation.navigate('vsignup', {
          oppurtunity: item.Oppurtunity, date: item.Date, type: item.Type, managerName: item.ManagerName, description: item.Description
        })}>
        <Text style={styles.Text}>Signup</Text>
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
  table : {
    marginTop:40,


  },
  Text : {
    color: 'white',
    fontWeight:'bold',
  },
  sectionContainer2 : {
      borderRadius: 0,
      alignItems: 'center',
      height:60,
      width: 100,
      marginLeft:20,
      marginBottom: 10,
      backgroundColor: 'darkblue',
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
  text: {

    fontSize: 15,
    padding: 10,
  }

});
