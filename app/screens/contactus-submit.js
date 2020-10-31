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
import firebase from 'firebase/app'
import 'firebase/auth'
import IconEntypo from 'react-native-vector-icons/Entypo'
import {app} from '../config';
export default class Page2 extends Component{

  componentDidMount() {

    var user = app.auth().currentUser;

    if (user != null) {
      var namey = user.displayName;
    }else{

    }
    this.setState({ name: namey})
  }
  constructor(props) {
    super(props);
    this.state = {
     name:[]
    };
  }
  render(

  ){
    return (
  <SafeAreaView style={styles.body}>
      <TouchableOpacity
       onPress={() => this.props.navigation.navigate('page-two')}>
         <IconEntypo name="chevron-thin-left" size={30}/>
      </TouchableOpacity>

  <View>

        <View style={styles.imgContainer}>
            <Image style={styles.Image}
          source={require('./logo1.png')}
          />

          <Image style={styles.Image2}
            source={require('./logo2.png')}
          />
          <Text style={styles.welcome}> Thanks for submiting, {this.state.name}</Text>
        </View>


  </View>
  </SafeAreaView >
    )
  }
}
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  scrollView: {

  },
  engine: {
    position: 'absolute',
    right: 0,
  },

  Text : {
    color: 'white',
    fontWeight:'bold',
  },
  or:{
    marginTop: 25,
    alignItems:'center'
  },
  Image : {
    width: width *.5,
    height:30,
    height:height*.1,
    resizeMode: 'contain',
    paddingBottom: 0,
  },
  imgContainer: {
    marginTop:width*.4,
    alignItems:'center'
  },
  welcome: {
    marginTop:height*.05,
    fontSize: 30,
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

});
