import React, {Component} from 'react'
import {
  SafeAreaView,
  stylesheet,
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
import  AsyncStorage  from '@react-native-community/async-storage';
import IconEntypo from 'react-native-vector-icons/Entypo'
import IonIcon from 'react-native-vector-icons/Ionicons'
import IconSimple from 'react-native-vector-icons/SimpleLineIcons'
import {app} from '../../config';
import MenuDrawer from 'react-native-side-drawer'
import styles from './home-css'
export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
     name:'',
     open: false,
     email: 'nope',
    };
  }

  componentDidMount() {
    this.getEmailName()
  }

  logout = async() => {
    try {
      await AsyncStorage.setItem('email', '')
      await AsyncStorage.setItem('name', '')
    } catch (err){
      console.log(err)
    }
  }
  getEmailName=async ()=>{
    const email = await AsyncStorage.getItem('email')
    const name = await AsyncStorage.getItem('name')
    console.log(name)
    this.setState({ name: name})
    }
  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  toggleClose = () => {
    this.setState({ open: false });
  };
  name = (hey) => {
    if (this.props.route.params===undefined){
      return this.state.name
    }else{
      return this.props.route.params.name
    }
  }

  drawerContent = () => {
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
          app.auth().signOut().then(function() {
          }).catch(function(error) {
          });
          this.setState({open: false})
          this.logout()
          this.props.navigation.navigate('signInOptions')}}>
          <Text style={styles.sidebar}>LogOut</Text>
        </TouchableOpacity>
      </View>

    );
  };

  render(

  ){




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

        <View style={styles.imgContainer}>
          <Image style={styles.Image} source={require('../photos/logo1.png')}/>
          <Image style={styles.Image2} source={require('../photos/logo2.png')}/>
          <Text style={styles.welcome}> Welcome {this.name()} </Text>
        </View>
        <TouchableOpacity style={[styles.Button, styles.donate]} onPress={() => Linking.openURL('https://goodsamfrc.org/donate/')}>
          <Text style={styles.Text}>Donate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Button, styles.volunteer]} onPress={() => this.props.navigation.push('volunteer')}>
          <Text style={styles.Text}>Volunteer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Button, styles.contactus]} onPress={() => this.props.navigation.push('contactus')}>
          <Text style={styles.Text}>ContactUs</Text>
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
