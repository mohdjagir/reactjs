//This is an example code to Add Search Bar Filter on Listview//
import React, { Component } from 'react';
//import react in our code.

import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
//import all the components we are going to use.

export default class SearchBar extends Component {
  
  render() {
    if (this.props.loading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 6 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.props.SearchFilterFunction(text)}
          value={this.props.data}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
    paddingTop: 16,
    paddingLeft:5,
    paddingRight:5

  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    width:'100%',
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});