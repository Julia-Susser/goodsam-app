import React, {Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  PixelRatio,
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
const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}



var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  Text : {
    color: 'white',
    fontWeight:'bold',
  },
  icon : {
    marginTop: Platform.OS === 'ios' ? height*.04:0,
  },
  sidebar_first : {
    color: "white",
    fontSize: normalize(35),
    marginLeft: 10,
    marginTop: height*.07,

  },
  sidebar : {
    color: "white",
    fontSize: normalize(35),
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
    fontSize: 30,
    textAlign: 'center',
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
