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
import Home from './home'
const Stack = createStackNavigator();

class Screens extends React.Component {
render() {
  console.log("here")
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="page-two" component={Page2} />
        </Stack.Navigator>
  </NavigationContainer>
  )
}
}

export default Screens;
