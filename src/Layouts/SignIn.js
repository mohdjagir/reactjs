import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {scale, verticalScale, moderateScale} from '../Utilities/CustomSize';
import ImageFiles from '../Utilities/Logo';
import Color from '../Utilities/Color';
import { InputField, ButtonField, PasswordInputField } from '../Components/InputFields';
export default class SignUp extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
   this.props.navigation.navigate('ExploreScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={ImageFiles.profile.Logo} style={styles.logo}/>
        </View>
        <InputField source={ImageFiles.drawerImage.secure_letter} placeholder="Email" secureTextEntry={false} keyboardType="email-address" underlineColorAndroid='transparent' onPressed={(email)=>this.setState({email})}/>
        <PasswordInputField source={ImageFiles.drawerImage.password} placeholder="Password" secureTextEntry={true}  underlineColorAndroid='transparent' onPressed={(password)=>this.setState({password})}/>
        <ButtonField text="Login" onClickListener={()=>this.onClickListener()}/>
        <ButtonField text="Have an account?" onClickListener={()=>this.props.navigation.navigate('SignUp')}/>
      </View>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  logoContainer:{
    height:verticalScale(200)
  },
  inputContainer: {
    borderColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderWidth: 1,
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
    width:scale(298),
    borderRadius:30,
  },
  btnByRegister: {
    height:verticalScale(15),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:verticalScale(20),
    width:verticalScale(300),
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: Color.loginButton.backgroundColor,
  },
  loginText: {
    color: Color.loginBtnText.textColor,
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
    textShadowRadius: 10
  },
  textByRegister:{
    color:"white",
    fontWeight:'bold',
    textAlign:'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowRadius: 10
  },
  logo:{
    width:scale(150),
    height:verticalScale(150),
    padding:moderateScale(5),
    resizeMode:'center'
  }
});  