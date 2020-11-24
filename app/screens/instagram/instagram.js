import React, {Component} from 'react'
import date from 'date-and-time';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Text,
  Image,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo'
import styles from './instagram-css'
import {app} from '../../config';

export default class Instagram extends Component{
  constructor(props) {
    super(props);
    this.state = {
     items:[],
     token: "",
    };
  }
  caption = (item)=>{
    if (item.caption != undefined){return item.caption}
  }

  date = (item )=>{
    var timee = item.timestamp.split("+")[0]
    var datee = date.transform(timee, 'YYYY-MM-DDTHH:mm:ss', 'MMMM D, YYYY');
    return (datee)
  }
  get_token = () => {
    const db = app.database();
    db.ref('instagram').once('value')
  .then((dataSnapshot) => {
      this.setState({token: dataSnapshot})
      console.log(dataSnapshot)
   });
   console.log(this.state.token)
    return (this.state.token)
  }
  componentDidMount() {


    const db = app.database();
    db.ref('instagram').once('value')
  .then((dataSnapshot) => {
    var link = "https://graph.instagram.com/17841444428002464/media?fields=media_url,caption,timestamp&access_token=https://graph.instagram.com/17841444428002464/media?fields=media_url,caption,timestamp&access_token="+dataSnapshot.val()
    fetch(link).then(response => response.json()).then(data => {
      this.setState({ items: data["data"]})
    });
  })
  }

  render(){

    return (

<SafeAreaView style={styles.body}>
  <ScrollView>

    <TouchableOpacity style={{width: 40}} onPress={() => this.props.navigation.navigate('home2')}>
      <IconEntypo name="chevron-thin-left" size={30}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => this.props.navigation.navigate('home2')}>
      <View style={styles.imgContainer}>
        <Image style={styles.logo} source={require('../photos/logo1.png')}/>
        <Image style={styles.logo2} source={require('../photos/logo2.png')}/>
      </View>
    </TouchableOpacity>

    <View>
      {this.state.items.map((item) =>
      <View style={styles.box} key={item.id}><Image source={{uri: item.media_url}} style={styles.image}/><Text style={styles.cap}>{this.date(item)}{"\n"}{this.caption(item)}</Text></View>
      )}
    </View>

  </ScrollView>
</SafeAreaView>
    )
  }
}
