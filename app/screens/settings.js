import React, { Component } from 'react';
import { Text, ScrollView, Image, TextInput, Dimensions,TouchableOpacity, SafeAreaView, Alert, Button, View, StyleSheet } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo'
import Textarea from 'react-native-textarea';
import {app} from '../config';
export default class Contactus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rname: "",
      remail: "",
      changeName: false,

    };
  }
  startChangeName = () => {
    this.setState({changeName: !this.state.changeName})
  }
  changeName = () => {
    if (this.state.changeName){
      return(
    <View style={styles.view}>
      <TextInput
    style={styles.textInput}
    autoCompleteType='username'
    onChangeText={text => onChangeText(text)}
    disableFullscreenUI={false}
    keyboardType='default'
    />
    </View>)
    }

  }
  componentDidMount() {
    var user = app.auth().currentUser;

    if (user != null) {
      var name = user.displayName;
      var email = user.email;
    }else{

    }
    this.setState({ rname: name, remail: email})


  }

  render() {
    const { navigate } = this.props.navigation;

    return (
<SafeAreaView style={styles.body}>
  <ScrollView>

    <TouchableOpacity onPress={() => this.props.navigation.navigate('page-two')}>
      <IconEntypo name="chevron-thin-left" size={30}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => this.props.navigation.navigate('page-two')}>
      <View style={styles.imgContainer}>
        <Image style={styles.logo} source={require('./photos/logo1.png')}/>
        <Image style={styles.logo2} source={require('./photos/logo2.png')}/>
      </View>
    </TouchableOpacity>

    <Text style={styles.header}>Settings</Text>

    <View style={styles.container}>
    <TouchableOpacity style={styles.Button} activeOpacity={1} onPress={() => { this.startChangeName() }}>
      <Text style={styles.buttonText}>Change Your Name</Text>
    </TouchableOpacity>

    {this.changeName()}
    </View>

  </ScrollView>
</SafeAreaView >
    );
  }
}

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    justifyContent: 'center'
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
    marginTop: 20,
    color: '#840404',
    fontWeight:'bold',
    fontSize: 35,
  },
  input: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
    width:width*.85,
    height:60,
  },
  textInput: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
    width:width*.85,
    height:100,
    textAlignVertical: 'top',
  },
  Button : {
      alignItems: 'center',
      height:60,
      width: width * .7,
      backgroundColor: '#840404',
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
