import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {scale, verticalScale, moderateScale} from '../Utilities/CustomSize';
import ImageFiles from '../Utilities/Logo';
import Color from '../Utilities/Color';

export default class WelcomeScreen extends Component {

// new customer 
newCustomer = () => {
    this.props.navigation.navigate('MobileVerification');
  }

// existing customer  
existingCustomer=()=>{
    this.props.navigation.navigate('SignIn');
}
  render() {
    return (
      <ImageBackground source={ImageFiles.drawerImage.background_image} style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={ImageFiles.profile.Logo} style={styles.logo}/>
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.newCustomer}>
          <Text style={styles.loginText}>New Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.existingCustomer}>
          <Text style={styles.loginText}>Existing Customer</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer:{
    height:verticalScale(200)
  },
  buttonContainer: {
    height:scale(45),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:verticalScale(20),
    width:scale(300),
    borderRadius:30,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: Color.loginButton.backgroundColor,
  },
  loginText: {
    color: Color.loginBtnText.textColor,
    fontSize:scale(15)
  },
  bgImage:{
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText:{
    color:"white",
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowRadius: 10,
  },
  logo:{
    width:scale(150),
    height:verticalScale(150),
    padding:moderateScale(5),
    resizeMode:'center'

  }
});  