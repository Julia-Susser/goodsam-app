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

import Page2 from './page-two/page-two'
import Home from './home'

import Login from './signIn/login'
import Signup from './signIn/signup'


import Start from './start'

import Volunteer from './volunteer/volunteer'
import Vsignup from './volunteer/volunteer-signup'

import Instagramm from './instagram'

import Settings from './settings'

import Contactus from './contactus/contactus'
import Csubmit from './contactus/contactus-submit'

const Stack = createStackNavigator();

class Screens extends React.Component {
  constructor(props) {
    super(props);
  }


render() {

  return (

  <NavigationContainer>
    <Stack.Navigator initialRouteName={ "start" } screenOptions={{
    headerShown: false,
    gestureEnabled: false
  }}>
          <Stack.Screen name="start" component={Start} />
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="page-two" component={Page2} />
          <Stack.Screen name="login" component={Login}/>
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="settings" component={Settings} />
          <Stack.Screen name="volunteer" component={Volunteer} />
          <Stack.Screen name="instagram" component={Instagramm} />
          <Stack.Screen name="contactus" component={Contactus} />
          <Stack.Screen name="vsignup" component={Vsignup} />
          <Stack.Screen name="csubmit" component={Csubmit} />
        </Stack.Navigator>
  </NavigationContainer>
  )
}
}

export default Screens;
