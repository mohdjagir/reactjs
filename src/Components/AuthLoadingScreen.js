import React from 'react';
import {
  AsyncStorage,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this.state={
        userToken:true
    }
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = () => {
    this.props.navigation.navigate(this.state.userToken==true ? 'SignIn' : 'SignUp');
  };

}