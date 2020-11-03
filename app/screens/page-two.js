import React, {Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  Linking,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import firebase from 'firebase/app'
import 'firebase/auth'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IonIcon from 'react-native-vector-icons/Ionicons'
import IconSimple from 'react-native-vector-icons/SimpleLineIcons'
import {app} from '../config';
import MenuDrawer from 'react-native-side-drawer'
export default class Page2 extends Component{

  componentDidMount() {


    var user = firebase.auth().currentUser;

    if (user != null) {
      var namey = user.displayName;
    }else{

    }
    this.setState({ name: namey})
    this.setState({ open: false})

  }
  constructor(props) {
    super(props);
    this.state = {
     name:[],
     open: false
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  toggleClose = () => {
    this.setState({ open: false });
  };

  drawerContent = () => {
    return (
      <View style={styles.animatedBox}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
        <Text style={styles.sidebar_first}>LogOut</Text>
      </TouchableOpacity>
      <View style = {styles.lineStyle} />
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
        <Text style={styles.sidebar}>Settings</Text>
      </TouchableOpacity>
      </View>

    );
  };

  render(

  ){
    return (
      <SafeAreaView>

      <MenuDrawer
            open={this.state.open}
            drawerContent={this.drawerContent()}
            drawerPercentage={45}
            animationTime={250}
            overlay={true}
            opacity={0.4}
        >
      <TouchableOpacity onPress={this.toggleClose} activeOpacity={1}>
      <View style={styles.body}>
      <TouchableOpacity onPress={this.toggleOpen} style={{width: 40}}>
             <IonIcon name="md-menu" style={styles.icon} size={50}/>
      </TouchableOpacity>

          <View style={styles.imgContainer}>
                <Image style={styles.Image}
              source={require('./photos/logo1.png')}
              />

              <Image style={styles.Image2}
                source={require('./photos/logo2.png')}
              />
              <Text style={styles.welcome}> Welcome {this.state.name}</Text>
    </View>
          <TouchableOpacity style={[styles.Button, styles.donate]}
           onPress={() => Linking.openURL('https://goodsamfrc.org/donate/')}>
           <Text style={styles.Text}>Donate</Text>
         </TouchableOpacity>

         <TouchableOpacity style={[styles.Button, styles.volunteer]}
          onPress={() => this.props.navigation.push('volunteer')}>
          <Text style={styles.Text}>Volunteer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Button, styles.contactus]}
         onPress={() => this.props.navigation.push('contactus')}>
         <Text style={styles.Text}>ContactUs</Text>
       </TouchableOpacity>

       <TouchableOpacity style={[styles.Button, styles.instagram]}
        onPress={() => this.props.navigation.push('instagram')}>
        <Text style={styles.Text}>Instagram</Text>
      </TouchableOpacity>

      </View>
      </TouchableOpacity>
      </MenuDrawer>
</SafeAreaView>



    )
  }
}
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },

  Text : {
    color: 'white',
    fontWeight:'bold',
  },
  icon : {
    marginTop: height*.04,
  },
  sidebar_first : {
    color: "white",
    fontSize:35,
    marginLeft: 10,
    marginTop: height*.07,

  },
  sidebar : {
    color: "white",
    fontSize:35,
    marginLeft: 10,
    marginTop: 10,
  },
  Image : {
    width: width *.5,
    height:30,
    height:height*.1,
    resizeMode: 'contain',
    paddingBottom: 0,
  },
  imgContainer: {
    alignItems:'center'
  },
  welcome: {
    marginTop:height*.05,
    fontSize: 30,
    color:'#840404',
    fontWeight: "bold",

  },
  Button : {
      marginTop: 50,
      borderRadius: 50,
      alignItems: 'center',
      marginLeft: width*.15,
      height:50,
      width: width * .7,
      backgroundColor: 'orange',
      justifyContent: 'center',

  },

  donate : {
    backgroundColor: '#ffae42',

  },
  volunteer : {
    backgroundColor: '#fb8c00',

  },
  contactus : {
    backgroundColor: '#e65100',
  },
  instagram : {
    backgroundColor: '#840404',
  },

  imgContainer: {

    alignItems:'center'
  },
  Image : {
    width: width *.5,
    height:30,
    height:height*.1,
    resizeMode: 'contain',
    paddingBottom: 0,
  },
  Image2 : {
    marginTop:0,
    height:height*.1,
    width: width *.9,
    resizeMode: 'contain'
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#ffae42",
    opacity: .9,
  },
  lineStyle:{
        borderWidth: 0.7,
        borderColor:'white',
        margin:8,
   },
  body: {
    height: height,
    top: 0,
    backgroundColor: "white",


  },
});
