import React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import setAuthorizationHeader from '../token/setAuthorizationHeader';
import { userLogoutRequest, fetchCurrentUserRequest } from '../Actions/authAction';
import jwtDecode from 'jwt-decode';



class SplashScreen extends React.Component {
  performTimeConsumingTask =  () => {
    return new Promise((resolve) =>
      setTimeout(
        async () => { 
            const token = await AsyncStorage.getItem('token');
            resolve(token);
          },
        2000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
        console.log("token !== null",data);
        setAuthorizationHeader(data);
        // Set current user data
        store.dispatch(fetchCurrentUserRequest());
        //Decode token and get user info and exp
        const decoded = jwtDecode(data);
        //Check for expired token
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime + 12 * 60 * 60) {
          //Logout user user with expired token
          store.dispatch(userLogoutRequest());
        }
        // Redirect user to Dashboard if token is still valid
        this.props.navigation.navigate('Home')
      } else {
        // Redirect user to Login page if token is not valid
        console.log("token null",data);

        this.props.navigation.navigate('Welcome')
      }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>
          Blitz Reading
        </Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}

export default SplashScreen;