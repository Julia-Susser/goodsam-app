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
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  margin:{
    marginBottom:height*.4,
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
  header : {
    marginTop:height*.0,
    marginLeft: width*.07,
    marginBottom: 10,
    marginTop: 10,
    color: '#840404',
    fontWeight:'bold',
    fontSize: 25,
  },
  input: {
    paddingLeft: 10,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: 'gray',
    width:width*.85,
    height:60,
  },
  Button : {
      alignItems: 'center',
      height:50,
      width: width * .7,
      marginBottom: 20,
      backgroundColor: '#840404',
      justifyContent: 'center',
  },
  saveButton : {
      alignItems: 'center',
      height:60,
      width: width * .5,
      marginBottom: 20,
      backgroundColor: '#fb8c00',
      justifyContent: 'center',
  },
  body: {
    width:width,
    height:height,
    backgroundColor: 'white',
  },
  buttonText : {
    fontWeight: "bold",
    color: "white"
  }

});

export default styles;
