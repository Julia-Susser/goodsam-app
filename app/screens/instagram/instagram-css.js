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
 image: {
    // Setting up image width.
 width: width-41,

 // Setting up image height.
 height: height*.4,

  },
  scrollView: {

  },
  box:{
      backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000',

        margin: 20,
},
  cap:{
    margin: 20,
    color: "black",
    fontSize: 20,

}
});


export default styles;
