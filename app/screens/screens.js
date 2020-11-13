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

import SignInOptions from './signIn/signInHome/signInOptions'

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


render() {

  return (

  <NavigationContainer>
    <Stack.Navigator initialRouteName={ "start" } screenOptions={{
    headerShown: false,
    gestureEnabled: false
  }}>
          <Stack.Screen name="start" component={Start} />
          <Stack.Screen name="signInOptions" component={SignInOptions}/>
          <Stack.Screen name="home" component={Instagramm} />
          <Stack.Screen name="home2" component={Home} />
          <Stack.Screen name="login" component={Login}/>
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="settings" component={Settings} />
          <Stack.Screen name="volunteer" component={Volunteer} />
          <Stack.Screen name="instagram" component={Instagramm} />
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
