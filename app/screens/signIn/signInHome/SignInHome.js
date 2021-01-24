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
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import  AsyncStorage  from '@react-native-community/async-storage';
import IconEntypo from 'react-native-vector-icons/Entypo'
import IonIcon from 'react-native-vector-icons/Ionicons'
import IconSimple from 'react-native-vector-icons/SimpleLineIcons'
import styles from './signInOptions-css'
export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
     name:null,
     open: false,
     email: 'nope',
     logged_in: '',
    };
  }


  componentDidMount() {
  }

  render(
  )

  {

    return(
      <SafeAreaView style={styles.body}>
      <ScrollView>
      <TouchableOpacity
        style={{width: 40}}
       onPress={() => this.props.navigation.navigate('home2')}>
         <IconEntypo name="chevron-thin-left" size={30}/>
      </TouchableOpacity>

      <View style={styles.imgContainer}>
        <Image style={styles.Image} source={require('../../photos/logo1.png')}/>
        <Image style={styles.Image2} source={require('../../photos/logo2.png')}/>
      </View>
      <TouchableOpacity style={styles.sectionContainer} onPress={() => this.props.navigation.push('login', {page:this.props.route.params.page})}>
        <Text style={styles.Text}>Login</Text>
      </TouchableOpacity>


      <View style={styles.or}>
      <Text>OR</Text>
      </View>

      <TouchableOpacity style={styles.sectionContainer2} onPress={() => this.props.navigation.push('signup', {page:this.props.route.params.page})}>
        <Text style={styles.Text}>Signup</Text>
      </TouchableOpacity>


      </ScrollView>
      </SafeAreaView >


  )
}
}
