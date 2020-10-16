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
import { InputField, ButtonField, PasswordInputField } from '../Components/InputFields';
import ImageFiles from '../Utilities/Logo';
export default class SignUp extends Component {

  constructor(props) {
    super(props);
    state = {
      name: '',
      email : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
   this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <ImageBackground source={ImageFiles.drawerImage.background_image} style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={ImageFiles.profile.Logo} style={styles.logo}/>
        </View>
    
        <InputField source={ImageFiles.drawerImage.secure_letter}  placeholder="Full name" secureTextEntry={false} keyboardType="email-address" underlineColorAndroid='transparent' onPressed={(name)=>this.setState({name})}/>
        <InputField source={ImageFiles.drawerImage.secure_letter}  placeholder="email-address" secureTextEntry={false} keyboardType="email-address" underlineColorAndroid='transparent' onPressed={(email)=>this.setState({email})}/>
        <PasswordInputField source={ImageFiles.drawerImage.password} placeholder="Password" secureTextEntry={true}  underlineColorAndroid='transparent' onPressed={(password)=>this.setState({password})}/>
     
        <TouchableOpacity style={styles.btnByRegister} onPress={() => this.onClickListener('restore_password')}>
            <Text style={styles.textByRegister}>By registering on this App you confirm that you have read and accept our policy</Text>
        </TouchableOpacity>

        <ButtonField text="Sign In" onClickListener={()=>this.onClickListener()}/>
        <ButtonField text="Have an account?" onClickListener={()=>this.props.navigation.navigate('SignIn')}/>
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
    height:verticalScale(45),
    marginBottom:moderateScale(20),
    flexDirection: 'row',
    alignItems:'center',
  },
  inputs:{
    height:verticalScale(45),
    marginLeft:scale(45),
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:scale(30),
    height:verticalScale(30),
    marginRight:scale(15),
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
    backgroundColor: "#00b5ec",
    shadowColor: "#808080",
  },
  loginText: {
    color: 'white',
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