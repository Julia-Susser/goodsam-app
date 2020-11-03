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
import {app} from '../../config';
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
  <TouchableOpacity onPress={() => this.props.navigation.navigate('home')}>
    <IconEntypo name="chevron-thin-left" size={30}/>
  </TouchableOpacity>



  <View style={styles.imgContainer}>
    <Image style={styles.Image} source={require('../photos/logo1.png')}/>
    <Image style={styles.Image2} source={require('../photos/logo2.png')}/>
    <Text style={styles.welcome}> Thanks for submiting, {this.state.name}</Text>
  </View>

  <TouchableOpacity style={[styles.Button, styles.donate]} onPress={() => Linking.openURL('https://goodsamfrc.org/donate/')}>
    <Text style={styles.Text}>Donate</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.Button, styles.volunteer]} onPress={() => this.props.navigation.push('volunteer')}>
    <Text style={styles.Text}>Volunteer</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.Button, styles.instagram]} onPress={() => this.props.navigation.push('instagram')}>
    <Text style={styles.Text}>Instagram</Text>
  </TouchableOpacity>


</SafeAreaView >
    )
  }
}
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
  instagram : {
    backgroundColor: '#e65100',
  },
  Button : {
      marginTop: 50,
      borderRadius: 50,
      alignItems: 'center',
      marginLeft: width*.15,
      height:50,
      width: width * .7,
      backgroundColor: 'orange',
      justifyContent: 'center',

  },

});