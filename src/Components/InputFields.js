import React, { Component } from 'react';
import { View, TextInput, Image, TouchableOpacity,Text } from 'react-native';
import {styles} from '../Assets/Stylesheet/inputField';

/***input field */
export const InputField = (props) => {
    return (
        <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={props.source} />
            <TextInput style={styles.inputs}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
                underlineColorAndroid={props.underLineColored}
                onChangeText={(email) => props.onPressed(email)} />
        </View>
    )
}
/***input field */
export const PasswordInputField = (props) => {
    return (
        <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={props.source} />
            <TextInput style={styles.inputs}
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                underlineColorAndroid={props.underLineColored}
                onChangeText={(email) => props.onPressed(email)} />
        </View>
    )
}

/***buttons */

export const ButtonField=(props)=>{
    return(
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => props.onClickListener()}>
          <Text style={styles.loginText}>{props.text}</Text>
        </TouchableOpacity>
    )
}