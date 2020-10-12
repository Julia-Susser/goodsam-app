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

import Page2 from './page-two'
import Login from './login'
import Home from './home'
import Signup from './signup'
import Volunteer from './volunteer'
import Instagramm from './instagram'
const Stack = createStackNavigator();

class Screens extends React.Component {
render() {
  console.log("here")
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
    headerShown: false
  }}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="page-two" component={Page2} />
          <Stack.Screen name="login" component={Login}/>
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="volunteer" component={Volunteer} />
          <Stack.Screen name="instagram" component={Instagramm} />
        </Stack.Navigator>
  </NavigationContainer>
  )
}
}

export default Screens;
