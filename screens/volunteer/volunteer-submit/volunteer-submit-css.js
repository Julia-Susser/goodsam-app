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
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  welcome: {
    marginTop:height*.05,
    fontSize: 20,
    color:'#840404',
    fontWeight: "bold",

  },
  body: {

    height:height,
    backgroundColor: 'white',
  },
  imgContainer: {

    alignItems:'center'
  },
  Image : {
    width: width *.5,
    height:30,
    height:height*.1,
    resizeMode: 'contain',
    paddingBottom: 0,
  },
  Image2 : {
    marginTop:0,
    height:height*.1,
    width: width *.9,
    resizeMode: 'contain'
  },
  Text : {
    color: 'white',
    fontWeight:'bold',
  },
  donate : {
    backgroundColor: '#ffae42',

  },
  volunteer : {
    backgroundColor: '#fb8c00',

  },
  contactus : {
    backgroundColor: '#e65100',
  },
  instagram : {
    backgroundColor: '#840404',
  },
  Button : {
      marginTop: height*.05,
      borderRadius: 50,
      alignItems: 'center',
      marginLeft: width*.15,
      height:50,
      width: width * .7,
      backgroundColor: 'orange',
      justifyContent: 'center',

  },

});

export default styles;
