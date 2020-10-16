import React from 'react';
import GooglePlacesInput from '../Components/GooglePlacesInput'
const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };
  
class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    
    getLocationCordinate(coords){
        console.log("coords",coords)
        this.props.navigation.push('Dashboard', {
            itemId: 'hello',
          })
    }
    
    render() {
        return (
            <GooglePlacesInput home={homePlace} work={workPlace} onHandle={(locations)=>this.getLocationCordinate(locations)}/>
        );
    }
}


export default Location;