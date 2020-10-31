import React, {Component} from 'react'
import date from 'date-and-time';
import { Table, Row, Rows } from 'react-native-table-component'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Text,
  Image,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase/app'
import 'firebase/auth'
import IconEntypo from 'react-native-vector-icons/Entypo'
export default class Page2 extends Component{
  componentDidMount() {

    fetch("https://graph.instagram.com/17841403749861133/media?fields=media_url,caption,timestamp&access_token=IGQVJXOG96cVhuUV9iSHZAYVHM3VE82OWs4eWJNT1dKUDhWUHBzd2hvZAmhIcXd3Sktwb1N4VVM2X3E1YWxaeTh6ZAU54bGF5VXp3VDA0c0g5akFtUmttRWs5WjQtdUpyQUtjbHZAEWkxR").then(response => response.json()).then(data => {

var datee = ''
var time = ''
var raw_list = [];
var w = ''
const pattern = date.compile('ddd, MMM D YYYY');
  data["data"].map((item) =>
    {
    time = item.timestamp.split("+")[0]
    console.log(time)
    datee = date.transform(time, 'YYYY-MM-DDTHH:mm:ss', 'MMMM D, YYYY');
    if (item.caption != undefined){
      w = <View style={styles.box} key={item.id}><Image source={{uri: item.media_url}} style={styles.image}/><Text>{datee}{"\n"}{item.caption}</Text></View>
      raw_list.push(w);
      console.log(w)
    }else{
      w = <View style={styles.box} key={item.id}><Image source={{uri: item.media_url}} style={styles.image}/><Text>{datee}</Text></View>
      raw_list.push(w);
      console.log(w)
    }


  }
  )

  this.setState({ items: raw_list})
const now = new Date(2020, 2, 5, 1, 2, 3, 4);


date.format(new Date(2020, 2, 3), pattern); // => Mar 3 2020
date.format(new Date(2020, 3, 4), pattern); // => Apr 4 2020




});

  }
  constructor(props) {
    super(props);
    this.state = {
     items:[]
    };
  }
  render(){

    const listItems = this.state.items


    return (
      <SafeAreaView>
      <ScrollView

        style={styles.scrollView}>
      <TouchableOpacity
       onPress={() => this.props.navigation.navigate('page-two')}>
         <IconEntypo name="chevron-thin-left" size={30}/>
      </TouchableOpacity>
      <View>{listItems}
      </View>

      </ScrollView>
      </SafeAreaView>
    )
  }
}
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const styles = StyleSheet.create({

  image: {
    // Setting up image width.
 width: width-41,

 // Setting up image height.
 height: height*.6,

  },
  scrollView: {

  },
box:{
  backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000',

        margin: 20,
}
});
