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
} from 'react-native';
import firebase from 'firebase/app'
import 'firebase/auth'


export default class Page2 extends Component{
  componentDidMount() {
  }
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View>
      <Button
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
      ></Button>
      <Button
        title={'ContactUs'}
      ></Button>

      </View>
    )
  }
}
