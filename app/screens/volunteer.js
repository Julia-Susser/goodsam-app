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
import firebase from 'firebase/app'
import 'firebase/auth'
import IconEntypo from 'react-native-vector-icons/Entypo'
export default class Page2 extends Component{
  constructor(props) {
    super(props);
    this.state = {
     items:[]
   };

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
    rows.map((item) =>
      {
        w = <View style={styles.box}><Text style={styles.text}>Oppurtunity: {item.Oppurtunity}{"\n"}</Text></View>
        raw_list.push(w);
      }
    )
    console.log(raw_list)
    this.setState({ items: raw_list})




  });

  }
  //jsusser@urbanschool.org
  render(){

const listItems = this.state.items
console.log(listItems)


    return (
      <SafeAreaView>
      <TouchableOpacity
       onPress={() => this.props.navigation.navigate('page-two')}>
         <IconEntypo name="chevron-thin-left" size={30}/>
      </TouchableOpacity>
      <View>
        {listItems}
        
      </View>
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
    fontSize: 20,
    padding: 10,
  }

});
