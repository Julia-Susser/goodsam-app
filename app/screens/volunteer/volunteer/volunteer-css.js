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
  body: {

    height:height,
    backgroundColor: 'white',
  },
  logo : {
    width: width *.5,
    height:height*.06,
    resizeMode: 'contain',
    paddingBottom: 0,
    marginTop:-20,
  },
  imgContainer: {
    alignItems:'center'
  },
  logo2 : {
    marginTop:0,
    height:height*.06,
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


export default styles;
