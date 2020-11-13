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
  PixelRatio,
} from 'react-native';
if (PixelRatio.get() <= 2) {
  font = 20;
}else{
  font = 30
}
console.log(font)
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  Text : {
    color: 'white',
    fontWeight:'bold',
  },
  icon : {
    marginTop: height*.04,
  },
  sidebar_first : {
    color: "white",
    fontSize:30,
    marginLeft: 10,
    marginTop: height*.07,

  },
  sidebar : {
    color: "white",
    fontSize:30,
    marginLeft: 10,
    marginTop: 10,
  },
  Image : {
    width: width *.5,
    height:30,
    height:height*.1,
    resizeMode: 'contain',
    paddingBottom: 0,
  },
  imgContainer: {
    alignItems:'center'
  },
  welcome: {
    marginTop:height*.05,
    fontSize: font,

    color:'#840404',
    fontWeight: "bold",

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

  Image2 : {
    marginTop:0,
    height:height*.1,
    width: width *.9,
    resizeMode: 'contain'
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#ffae42",
    opacity: .9,
  },
  lineStyle:{
        borderWidth: 0.7,
        borderColor:'white',
        margin:8,
   },
  body: {
    height: height,
    top: 0,
    backgroundColor: "white",


  },
});
export default styles;
