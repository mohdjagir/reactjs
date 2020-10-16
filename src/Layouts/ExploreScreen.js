import React from 'react';
import { Button, View, StatusBar, SafeAreaView, FlatList, Alert, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import Color from '../Utilities/Color';
import Slideshow from 'react-native-slideshow';
import { ScrollView } from 'react-native-gesture-handler';
import { verticalScale } from '../Utilities/CustomSize';

// import { connect } from 'react-redux';
// import { loadUsers } from '../Actions/Actions';
class ExploreScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Title 1',
          caption: 'Caption 1',
          url: 'http://placeimg.com/640/480/any',
        }, {
          title: 'Title 2',
          caption: 'Caption 2',
          url: 'http://placeimg.com/640/480/people',
        }, {
          title: 'Title 3',
          caption: 'Caption 3',
          url: 'http://placeimg.com/640/480/tech',
        },
      ],
      data: [
        { id: 1, title: "Option 1", image: "https://img.icons8.com/color/70/000000/cottage.png" },
        { id: 1, title: "Option 2", image: "https://img.icons8.com/color/70/000000/administrator-male.png" },
        { id: 2, title: "Option 3", image: "https://img.icons8.com/color/70/000000/filled-like.png" },
        { id: 3, title: "Option 4", image: "https://img.icons8.com/color/70/000000/facebook-like.png" },
        { id: 4, title: "Option 5", image: "https://img.icons8.com/color/70/000000/shutdown.png" },
        { id: 5, title: "Option 6", image: "https://img.icons8.com/color/70/000000/traffic-jam.png" },
        { id: 6, title: "Option 7", image: "https://img.icons8.com/dusk/70/000000/visual-game-boy.png" },
        { id: 8, title: "Option 8", image: "https://img.icons8.com/flat_round/70/000000/cow.png" },
        { id: 9, title: "Option 9", image: "https://img.icons8.com/color/70/000000/coworking.png" },
        { id: 9, title: "Option 10", image: "https://img.icons8.com/nolan/70/000000/job.png" },
      ],
      productData: [
        { id: 1, title: "Product 1", price: "$ 25.00 USD", image: "https://lorempixel.com/400/200/nature/6/" },
        { id: 2, title: "Product 2", price: "$ 10.13 USD", image: "https://lorempixel.com/400/200/nature/5/" },
        { id: 3, title: "Product 3", price: "$ 12.12 USD", image: "https://lorempixel.com/400/200/nature/4/" },
        { id: 4, title: "Product 4", price: "$ 11.00 USD", image: "https://lorempixel.com/400/200/nature/6/" },
        { id: 5, title: "Product 5", price: "$ 20.00 USD", image: "https://lorempixel.com/400/200/sports/1/" },
        { id: 6, title: "Product 6", price: "$ 33.00 USD", image: "https://lorempixel.com/400/200/nature/8/" },
        { id: 7, title: "Product 7", price: "$ 20.95 USD", image: "https://lorempixel.com/400/200/nature/1/" },
        { id: 8, title: "Product 8", price: "$ 13.60 USD", image: "https://lorempixel.com/400/200/nature/3/" },
        { id: 9, title: "Product 9", price: "$ 15.30 USD", image: "https://lorempixel.com/400/200/nature/4/" },
        { id: 10, title: "Product 10", price: "$ 21.30 USD", image: "https://lorempixel.com/400/200/nature/5/" },
        { id: 11, title: "Product 10", price: "$ 21.30 USD", image: "https://lorempixel.com/400/200/nature/5/" },
        { id: 12, title: "Product 10", price: "$ 21.30 USD", image: "https://lorempixel.com/400/200/nature/5/" },
      ],
     
        currentLongitude: 'unknown',//Initial Longitude
        currentLatitude: 'unknown',//Initial Latitude
    
    };
  }
  // static navigationOptions = ({ navigation }) => {
  //   const {state} = navigation;
  //   return {
  //     //Heading/title of the header
  //     headerStyle: {
  //       backgroundColor: Color.headerColor.headerBack
  //     },
  //     headerRight: <HeaderRight navigation={navigation}  />,
  //     headerLeft : <CustomHeader navigation={navigation} getCurrentLocation={state.locationSave}/>,
  //   };
  // };

  onGoBack=(e)=>{
    console.log("e",e)
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  clickEventListener(item) {
    Alert.Alert(item.title)
  }

  // getting current position
  componentDidMount = () => {
    var that =this;
    //Checking for the permission just after component loaded
    if(Platform.OS === 'ios'){
      this.callLocation(that);
    }else{
      async function requestLocationPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
              'title': 'Location Access Required',
              'message': 'This App needs to Access your location'
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            that.callLocation(that);
          } else {
            console.warn("Permission denied")
            }
        } catch (err) {
         
          console.warn(err)
        }
      }
      requestLocationPermission();
    }    
   }

// clear geolocation watch 
componentWillUnmount = () => {
    Geolocation.clearWatch(this.watchID);
 }

 callLocation(that){
    //alert("callLocation Called");
      Geolocation.getCurrentPosition(
        //Will give you the current location
         (position) => {
            const currentLongitude = JSON.stringify(position.coords.longitude);
            //getting the Longitude from the location json
            const currentLatitude = JSON.stringify(position.coords.latitude);
            //getting the Latitude from the location json
            that.setState({ currentLongitude:currentLongitude });
            // //Setting state Longitude to re re-render the Longitude Text
            that.setState({ currentLatitude:currentLatitude });
            this.props.navigation.setParams({ locationSave: {'latitude':currentLatitude,'longitude':currentLongitude} });
            //Setting state Latitude to re re-render the Longitude Text
         },
         (error) => alert(error.message),
         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
      that.watchID = Geolocation.watchPosition((position) => {
        //Will give you the location on location change
          console.log(position);
          const currentLongitude = JSON.stringify(position.coords.longitude);
          //getting the Longitude from the location json
          const currentLatitude = JSON.stringify(position.coords.latitude);
          //getting the Latitude from the location json
         that.setState({ currentLongitude:currentLongitude });
        //  //Setting state Longitude to re re-render the Longitude Text
         that.setState({ currentLatitude:currentLatitude });
         this.props.navigation.setParams({ locationSave: {'latitude':currentLatitude,'longitude':currentLongitude} });
         //Setting state Latitude to re re-render the Longitude Text
      });
   }
  render() {
    return (
      <SafeAreaView>
        <StatusBar
          backgroundColor={Color.headerColor.headerBack}
          barStyle="light-content"
        />
        <CustomHeader navigation={this.props.navigation}/>
        <Slideshow
          containerStyle={sliderStyleObject}
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })} />

        <ScrollView>
          <View style={{flex:1,flexDirection:'row',alignContent:'space-between'}}>
            <Text style={{ fontSize: 20,marginTop:10,marginLeft:10,width:'80%', fontWeight: '600',alignSelf:'flex-start' }}>Browse Categories</Text>
            <Text style={{ fontSize: 18,marginTop:10,marginBottom:5,width:'20%', fontWeight: '400',alignSelf:'flex-end' }}>See all</Text>
          </View>
          <FlatList style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={this.state.data.slice(0, 9)}
            horizontal={false}
            numColumns={3}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={({ index, item }) => {
              return (
                <TouchableOpacity style={styles.card} onPress={() => console.log("categories")}>
                  <View style={styles.cardFooter}></View>
                  <Image style={styles.cardImage} source={{ uri: item.image }} />
                  <View style={styles.cardHeader}>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                      <Text style={styles.title}>{item.title + index}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }} />
           <View style={{flex:1,flexDirection:'row',alignContent:'space-between'}}>
            <Text style={{ fontSize: 20,margin:20,marginLeft:10,width:'100%', fontWeight: '600',alignSelf:'flex-start' }}>Fresh Recommendation</Text>
          </View>
          <FlatList style={styles.prList}
            contentContainerStyle={styles.prListContainer}
            data={this.state.productData}
            horizontal={false}
            numColumns={2}
            keyExtractor={(item) => {
              return item.id;
            }}
            ItemSeparatorComponent={() => {
              return (
                <View style={styles.prSeparator} />
              )
            }}
            renderItem={(post) => {
              const item = post.item;
              return (
                <View style={styles.prCard}>

                  {/* <View style={styles.prCardHeader}>
                    <View>
                      <Text style={styles.prTitle}>{item.title}</Text>
                      <Text style={styles.prPrice}>{item.price}</Text>
                    </View>
                  </View> */}

                  <Image style={styles.prCardImage} source={{ uri: item.image }} />

                  <View style={styles.prCardFooter}>
                    <View style={styles.prSocialBarContainer}>
                      <View style={styles.prSocialBarSection}>
                        <TouchableOpacity style={styles.prSocialBarButton} onPress={() => this.addProductToCart()}>
                          <Image style={styles.prIcon} source={{ uri: 'https://png.icons8.com/nolan/96/3498db/add-shopping-cart.png' }} />
                          <Text style={[styles.prSocialBarLabel, styles.prBuyNow]}>Buy Now</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.prSocialBarSection}>
                        <TouchableOpacity style={styles.prSocialBarButton}>
                          <Image style={styles.prIcon} source={{ uri: 'https://png.icons8.com/color/50/000000/hearts.png' }} />
                          <Text style={styles.prSocialBarLabel}>25</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              )
            }} />
        </ScrollView>

      </SafeAreaView>
    );

  }
}

// const mapStateToProps=(state)=>{
//   return{
//   userData:state.data,
//   loading:state.loading,
//   error:state.error
//   }
// }

// const mapDispatchToProps=(dispatch)=>{
//   return {
//     loadUsers:loadUsers
//   }
// }
export default ExploreScreen;

const styles = StyleSheet.create({

  list: {
    marginTop: 20,
    paddingHorizontal: 5,
  },
  listContainer: {
    alignItems: 'center'
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 3,
    backgroundColor: "white",
    flexBasis: '32%',
    marginHorizontal: 3,
  },
  cardHeader: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  cardContent: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 5,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 40,
    width: 40,
    alignSelf: 'center'
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: "#696969"
  },
  prList: {
    paddingHorizontal: 5,
  },
  prListContainer: {
    alignItems: 'center'
  },
  prSeparator: {
    marginTop: 10,
  },
  /******** card **************/
  prCard: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 4
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    marginVertical: 5,
    backgroundColor: "white",
    flexBasis: '49%',
    marginHorizontal: 5,
    borderWidth: 3,
    borderColor: '#00000021'
  },
  prCardHeader: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  prCardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  prCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  prCardImage: {
    flex: 1,
    height: 120,
    paddingTop:10,
    width: null,
  },
  /******** card components **************/
  prTitle: {
    fontSize: 18,
    flex: 1,
  },
  prPrice: {
    fontSize: 16,
    color: "green",
    marginTop: 5
  },
  prBuyNow: {
    color: "purple",
  },
  prIcon: {
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  prSocialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  prSocialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  prSocialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  prSocialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const sliderStyleObject={
  paddingTop:verticalScale(0)
}