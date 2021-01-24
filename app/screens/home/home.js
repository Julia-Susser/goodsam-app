import React, {Component} from 'react'
import {
  SafeAreaView,
  stylesheet,
  ScrollView,
  View,
  Text,
  Alert,
  Image,
  Button,
  Linking,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import firebase from 'firebase/app'
import 'firebase/auth'
import { WebView } from 'react-native-webview';
import  AsyncStorage  from '@react-native-community/async-storage';
import IconEntypo from 'react-native-vector-icons/Entypo'
import IonIcon from 'react-native-vector-icons/Ionicons'
import IconSimple from 'react-native-vector-icons/SimpleLineIcons'
import {app} from '../../config';
import MenuDrawer from 'react-native-side-drawer'
import styles from './home-css'
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
     name:null,
     open: false,
     email: 'nope',
     logged_in: ''
    };
  }

  componentDidMount() {
    this.login()
    this.getEmailName()
  }

  logout = async() => {
    try {
      await AsyncStorage.setItem('email', '')
      await AsyncStorage.setItem('name', '')
    } catch (err){

    }
  }
  getEmailName=async ()=>{
    const email = await AsyncStorage.getItem('email')
    var name = await AsyncStorage.getItem('name')
    console.log(name)
    if (name != null){
      name = name.split(" ")[0]
    }
    this.setState({ name: name})
    this.setState({ email: email})
    }
  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  toggleClose = () => {
    this.setState({ open: false });
  };
  name = () => {
    if (this.props.route.params===undefined){
      return this.state.name
    }else{
      return this.props.route.params.name
    }
  }

  drawerContent = () => {
    if (this.state.logged_in != null){
    return (
      <View style={styles.animatedBox}>
        <TouchableOpacity onPress={() => {
          this.props.navigation.push('settings')
          this.setState({open: false})
        }}>
          <Text style={styles.sidebar_first}>Settings</Text>
        </TouchableOpacity>
        <View style = {styles.lineStyle} />
        <TouchableOpacity onPress={() => {
          this.logout()
          app.auth().signOut().then(function() {
          }).catch(function(error) {
          });


          this.props.navigation.push('home2')}}>
          <Text style={styles.sidebar}>LogOut</Text>
        </TouchableOpacity>
      </View>

    );
  }else{
    return (
      <View style={styles.animatedBox}>
        <TouchableOpacity onPress={() => {
          this.props.navigation.push('signInHome', {page:"home2"})
          this.setState({open: false})
        }}>
          <Text style={styles.sidebar_first}>Log In</Text>
        </TouchableOpacity>
        <View style = {styles.lineStyle} />

      </View>

    );
  }
  };
  login=async ()=>{
    const { push } = this.props.navigation;
    const logged_in = await AsyncStorage.getItem('email')
    const name = await AsyncStorage.getItem('name')
    const password = await AsyncStorage.getItem('password')
    this.setState({ logged_in: logged_in})
    async function logout (){
      try {
        await AsyncStorage.setItem('email', '')
        await AsyncStorage.setItem('name', '')
      } catch (err){

      }
    }
    if (logged_in != null){
      app.auth().signInWithEmailAndPassword(logged_in, password).then(function(result) {
        var user = app.auth().currentUser;

        var namey = user.displayName;

        if (name != namey){
          logout()
          push('signInHome')
        }
        })
        .catch(function(error) {
        logout()
        push('signInHome')

        });
    }
    }

  render(


  )

  {
console.log(this.state.name)

//{this.state.logged_in != null &&
//}
//, {marginTop: this.state.logged_in === null ? height*.1:0,}

    return (
  <MenuDrawer
  open={this.state.open}
  drawerContent={this.drawerContent()}
  drawerPercentage={45}
  animationTime={250}
  overlay={true}
  opacity={0.4}
  >
  <SafeAreaView>
  <ScrollView>
    <TouchableOpacity onPress={this.toggleClose} activeOpacity={1}>
      <View style={styles.body}>

        <TouchableOpacity onPress={this.toggleOpen} style={{width: 40}}>
          <IonIcon name="md-menu" style={styles.icon} size={50}/>
        </TouchableOpacity>

        <View style={[styles.imgContainer]}>
          <Image style={styles.Image} source={require('../photos/logo1.png')}/>
          <Image style={styles.Image2} source={require('../photos/logo2.png')}/>
          <Text style={[styles.welcome, {fontSize: this.state.logged_in === null ? 40:30}]}>Welcome {this.name()}</Text>
        </View>
        <TouchableOpacity style={[styles.Button, styles.donate]} onPress={() => {
          Linking.openURL('https://goodsamfrc.org/donate/')
        }}>
          <Text style={styles.Text}>Donate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Button, styles.volunteer]} onPress={() => {
          if (this.state.logged_in != null){
            this.props.navigation.push('volunteer')
          }else{
            this.props.navigation.push('signInHome', {page:"volunteer"})
          }
        }}>
          <Text style={styles.Text}>Volunteer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Button, styles.contactus]} onPress={() => this.props.navigation.push('contactus')}>
          <Text style={styles.Text}>Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Button, styles.instagram]} onPress={() => this.props.navigation.push('instagram')}>
          <Text style={styles.Text}>Instagram</Text>
        </TouchableOpacity>

      </View>
    </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
</MenuDrawer>


    )

  }
}
