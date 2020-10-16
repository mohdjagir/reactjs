import { StyleSheet } from 'react-native';
import {scale, verticalScale, moderateScale} from '../../Utilities/CustomSize';
import Color from '../../Utilities/Color';

const resizeMode = 'center';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoContainer:{
      height:verticalScale(200)
    },
    inputContainer: {
      borderColor: '#CCCCCC',
      backgroundColor: '#FFFFFF',
      borderRadius:6,
      borderWidth: 1,
      width:scale(300),
      height:verticalScale(50),
      marginBottom:moderateScale(20),
      flexDirection: 'row',
      alignItems:'center',
    },
    inputs:{
      height:verticalScale(50),
      marginLeft:scale(5),
      borderBottomColor: '#FFFFFF',
      flex:1,
    },
    inputIcon:{
      width:scale(30),
      height:verticalScale(30),
      marginLeft:scale(8),
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