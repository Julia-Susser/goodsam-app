import React, {Component} from 'react'

import { Table, Row, Rows } from 'react-native-table-component'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase/app'
import 'firebase/auth'

export default class Page2 extends Component{
  constructor(props) {
    super(props);
    this.state = {
     items:[]
    };
    this.tableData = [['Oppurtnity', 'Date', 'Type']]

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

    this.setState({ items: rows })

});

  }

  render(){
    const listItems = this.state.items.map((item) =>
    [item.Oppurtunity, item.Date, item.Type]
  );
    tableData = listItems
  console.log(listItems)
      tableHead = ['Oppurtnity', 'Date', 'Type']
      
    return (
      <View>

      <Button
        title={'hey'}
        onPress={() => this.props.navigation.navigate('login')}
        ></Button>
      <Button
        title={'Donate'}
        onPress={() => this.props.navigation.navigate('login')}
        ></Button>
      <Button
        title={'Volenteer'}
        onPress={() => this.props.navigation.navigate('volunteer')}
      ></Button>
      <Button
        title={'Instagram'}
      ></Button>
      <Button
        title={'ContactUs'}
      ></Button>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={tableHead}/>
          <Rows data={tableData}/>
        </Table>
      </View>
    )
  }
}
