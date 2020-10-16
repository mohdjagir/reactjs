import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {scale, verticalScale, moderateScale} from '../Utilities/CustomSize';
import ImageFiles from '../Utilities/Logo';
import Color from '../Utilities/Color';

export default class MobileVerification extends Component {

  constructor(props) {
    super(props);
    state = {
      mobileOtp : '',
      mobileNumber:''
    }
  }

  render() {
    return (
      <ImageBackground source={ImageFiles.drawerImage.background_image} style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={ImageFiles.profile.Logo} style={styles.logo}/>
        </View>

        <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={ImageFiles.drawerImage.secure_letter}/>
          <TextInput style={styles.inputs}
              placeholder="Enter Mobile Number"
              underlineColorAndroid='transparent'
              autoCompleteType="tel"
              keyboardType = 'numeric'
              onChangeText={(email) => this.setState({email})}/>
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.newCustomer}>
          <Text style={styles.loginText}>New Customer</Text>
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
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:scale(300),
    height:verticalScale(50),
    marginBottom:moderateScale(20),
    flexDirection: 'row',
    alignItems:'center',
  },
  inputs:{
    height:verticalScale(50),
    marginLeft:scale(10),
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:scale(30),
    height:verticalScale(30),
    marginLeft:scale(15),
    justifyContent: 'center'
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