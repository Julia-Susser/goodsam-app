//This is an example code to understand WebView//

import React, { Component } from 'react';
//import react in our code.
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  Linking,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { WebView } from "react-native-webview";
//import all the components we are going to use.
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class App extends Component {
  constructor(props) {
  super(props);
  this.state = { visible: true };
}

hideSpinner() {
  this.setState({ visible: false });
}

render() {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        onLoad={() => this.hideSpinner()}
        style={{ flex: 1 }}
        source={{ uri: 'https://goodsamfrc.org/donate/' }}
      />
      {this.state.visible && (

        <ActivityIndicator
          style={{ position: "absolute", top: height *.3, left: width*.45 }}
          size="large"
          animating = {true}
          color = 'gray'
        />


      )}
    </View>
  );
}

}
