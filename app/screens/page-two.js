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
import IconSimple from 'react-native-vector-icons/SimpleLineIcons'
import {app} from '../config';
export default class Page2 extends Component{

  componentDidMount() {


    var user = firebase.auth().currentUser;

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
       onPress={() => this.props.navigation.navigate('Home')}>
         <IconSimple name="logout" size={50}/>
      </TouchableOpacity>

  <View>

            <View style={styles.imgContainer}>
            <Image style={styles.Image}
          source={require('./logo1.png')}
          />

          <Image style={styles.Image2}
            source={require('./logo2.png')}
          />
          <Text style={styles.welcome}> Welcome {this.state.name}</Text>
</View>
      <TouchableOpacity style={[styles.sectionContainer, styles.donate]}
       onPress={() => Linking.openURL('https://goodsamfrc.org/donate/')}>
       <Text style={styles.Text}>Donate</Text>
     </TouchableOpacity>

     <TouchableOpacity style={[styles.sectionContainer, styles.volunteer]}
      onPress={() => this.props.navigation.navigate('volunteer')}>
      <Text style={styles.Text}>Volunteer</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.sectionContainer, styles.contactus]}
     onPress={() => this.props.navigation.navigate('contactus')}>
     <Text style={styles.Text}>ContactUs</Text>
   </TouchableOpacity>

   <TouchableOpacity style={[styles.sectionContainer, styles.instagram]}
    onPress={() => this.props.navigation.navigate('instagram')}>
    <Text style={styles.Text}>Instagram</Text>
  </TouchableOpacity>

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
  sectionContainer : {
      marginTop: 50,
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
