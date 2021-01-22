/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  AsyncStorage  from '@react-native-community/async-storage';

import Home from './home/home'

import Donate from './home/donate'

import Login from './signIn/login/login'
import Signup from './signIn/signUp/signup'


import Start from './start'

import Volunteer from './volunteer/volunteer/volunteer'
import Vsignup from './volunteer/volunteer-signup/volunteer-signup'
import Vsubmit from './volunteer/volunteer-submit/volunteer-submit'

import Instagramm from './instagram/instagram'

import Settings from './settings/settings'

import Contactus from './contactus/contactus/contactus'
import Csubmit from './contactus/contactus-submit/contactus-submit'

const Stack = createStackNavigator();

class Screens extends React.Component {
  constructor(props) {
    super(props);
  }

  login=async ()=>{

    const logged_in = await AsyncStorage.getItem('email')
    const name = await AsyncStorage.getItem('name')
    const password = await AsyncStorage.getItem('password')
    if (logged_in != null){
      return "home2"


    }else{
      return "signInOptions"
    }
    }
  componentDidMount() {



  }
render() {

  return (

  <NavigationContainer>
    <Stack.Navigator initialRouteName={ "home2" } screenOptions={{
    headerShown: false,
    gestureEnabled: false
  }}>
          <Stack.Screen name="instagram" component={Instagramm} />
          <Stack.Screen name="start" component={Start} />
          <Stack.Screen name="donate" component={Donate} options={{ headerShown: true, title: '' }}/>
          <Stack.Screen name="home" component={Instagramm} />
          <Stack.Screen name="home2" component={Home} options={{ title: '' }}/>
          <Stack.Screen name="login" component={Login}/>
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="settings" component={Settings} />
          <Stack.Screen name="volunteer" component={Volunteer} />

          <Stack.Screen name="contactus" component={Contactus} />
          <Stack.Screen name="vsignup" component={Vsignup} />
          <Stack.Screen name="csubmit" component={Csubmit} />
          <Stack.Screen name="vsubmit" component={Vsubmit} />
        </Stack.Navigator>
  </NavigationContainer>
  )
}
}

export default Screens;
