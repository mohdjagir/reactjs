import React from 'react';
import { Image, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
navigator.geolocation = require('react-native-geolocation-service');

const GooglePlacesInput = (props) => {
  return (
    <GooglePlacesAutocomplete
      query={{
        key: '',
        language: 'en', // language of the results
      }}
      onPress={(data, details = null) => props.onHandle(data)}
      onFail={error => console.error(error)}
      placeholder='Search place, Adress, city...'
      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      predefinedPlaces={[props.home, props.work]}

      styles={{
        textInputContainer: {
          width: '100%',
          height:56
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        },
        textInput:{
          height:42
        }
      }}
      renderLeftButton={()  => <Image source={{uri: 'https://reactjs.org/logo-og.png'}} />}
    />
  );
};

export default GooglePlacesInput;