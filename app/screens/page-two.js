import React, {Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import firebase from 'firebase/app'
import 'firebase/auth'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
export default class Page2 extends Component{
  componentDidMount() {
  }
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <SafeAreaView style={styles.body}>
      <IconAntDesign name="left" size={50}/>

      <View>

      <Button
        style={styles.sectionContainer2}
        title={'Donate'}
        onPress={() => this.props.navigation.navigate('login')}
        ></Button>
      <Button
        title={'Donate'}
        onPress={() => this.props.navigation.navigate('login')}
        ></Button>
      <Button
        title={'Volenteer'}
        onPress={() => this.props.navigation.navigate('volunteer')}
      ></Button>
      <Button
        title={'Instagram'}
        onPress={() => this.props.navigation.navigate('instagram')}
      ></Button>
      <Button
        title={'ContactUs'}
      ></Button>

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

  Image2 : {
    marginTop:0,
    height:height*.1,
    width: width *.9,
    resizeMode: 'contain'
  },
  body: {

    height:height,
    backgroundColor: 'white',
  },

});
