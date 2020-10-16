import React from 'react';
import {Dimensions} from 'react-native';
import { createAppContainer, createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import SignUp from '../Layouts/SignUp';
import SignIn from '../Layouts/SignIn';
import ContactScreen from '../Layouts/ContactScreen';
import MyProductAds from '../Layouts/MyProductAds';
import MyAccounts from '../Layouts/MyAccounts';
import ExchangeProduct from '../Layouts/ExchangeProduct';
import ChatListScreen from '../Layouts/ChatListScreen';
import ExploreScreen from '../Layouts/ExploreScreen';
import SettinScreen from '../Layouts/SettinScreen';
import AboutScreen from '../Layouts/AboutScreen';
import MobileVerification from '../Layouts/MobileVerification';
import WelcomeScreen from '../Layouts/WelcomeScreen';
import CustomSideDrawer from '../Components/CustomSideDrawer';
import SplashScreen from '../Layouts/SplashScreen';
import IntroductionScreen from '../Layouts/IntroductionScreen';
import { CustomHeader, SearchBarHeader, HeaderRight } from '../Components/CustomHeader';
import Chat from '../Layouts/Chat';
import { Icon } from 'react-native-elements';
import Color from '../Utilities/Color';
import Location from '../Layouts/Location';

const HomeStackNavigator=createStackNavigator({
    ExploreScreen:{
        screen:ExploreScreen,
        navigationOptions:{
            header: null
        }
    },
    Location:{
        screen:Location,
        navigationOptions:({navigation})=>({
            headerStyle: {
                backgroundColor: Color.headerColor.headerBack,
              },
            title:'Search Location',
            headerLeft:<SearchBarHeader navigation={navigation}/>
        })
    }
})

const ChatStackNavigator=createStackNavigator({
    ChatListScreen:{
        screen:ChatListScreen,
        // navigationOptions:({navigation})=>({
        //     headerStyle: {
        //         backgroundColor: Color.headerColor.headerBack
        //       },
        //     headerLeft:<CustomHeader />,
        //     headerRight:<HeaderRight navigation={navigation}/>
        // })
    },
    Chat:{
        screen:Chat,
         navigationOptions:{
            title:'Chat',
             
        }
    }
})

const DrawerNavigator = createDrawerNavigator({
    Home:HomeStackNavigator,
    About:{
        screen:AboutScreen
    },
    Setting:{
        screen:SettinScreen
    },
    Contact:{
        screen:ContactScreen
    }
},{
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSideDrawer,
    drawerPosition: 'right',

    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,

});


const BottomTab=createBottomTabNavigator({
    Home:{
        screen:DrawerNavigator,
        navigationOptions:{  
            tabBarLabel:'EXPLORE',
            tabBarOptions: {
                activeTintColor: Color.loginButton.backgroundColor,
          }, 
            tabBarIcon:({tintColor})=>(  
                <Icon name="wpexplorer" type="font-awesome" color={Color.loginButton.backgroundColor} size={25}/>  
            )
          }  
    },
    ChatStackNavigator:{
        screen:ChatStackNavigator,
        navigationOptions:{  
            tabBarLabel:'CHAT',
            tabBarOptions: {
                activeTintColor: Color.loginButton.backgroundColor,
          },   
            tabBarIcon:({tintColor})=>(  
                <Icon name="paper-plane" type="font-awesome" color={Color.loginButton.backgroundColor} size={25}/>  
            )
            
          }  
    },
    ExchangeProduct:{
        screen:ExchangeProduct,
        navigationOptions:{  
            tabBarLabel:'EXCHANGE',
            tabBarOptions: {
                activeTintColor: Color.loginButton.backgroundColor,
          },   
            tabBarIcon:({tintColor})=>(  
                <Icon name="camera-retro" type="font-awesome" color={Color.loginButton.backgroundColor} size={25}/>  
            ),
            headerLeft:<CustomHeader />,
            HeaderRight:<HeaderRight />  
          }  
    },
    MyProductAds:{
       screen:MyProductAds,
       navigationOptions:{  
           tabBarLabel:'MY ADS',
           tabBarOptions: {
            activeTintColor: Color.loginButton.backgroundColor,
      },   
           tabBarIcon:({tintColor})=>(  
               <Icon name="buysellads" type="font-awesome" color={Color.loginButton.backgroundColor} size={25}/>  
           )  
         }   
    },
    MyAccounts:{
        screen:MyAccounts,
        navigationOptions:{  
            tabBarLabel:'ACCOUNTS',
            tabBarOptions: {
                activeTintColor: Color.loginButton.backgroundColor,
          },   
            tabBarIcon:({tintColor})=>(  
                <Icon name="user" type="font-awesome" color={Color.loginButton.backgroundColor} size={25}/>  
            )  
          }  
    }
})



const StackNavigation = createSwitchNavigator({
    IntroductionScreen:{
        screen:IntroductionScreen
    },
    SignIn:{
       screen:SignIn,
    },
    SignUp:{
        screen:SignUp
    },
    MobileVerification:{
       screen:MobileVerification 
    },
    Welcome:{
       screen:WelcomeScreen 
    },
    Authenticate:BottomTab,
    SplashScreen:{
        screen:SplashScreen
    }
},{
    initialRouteName: 'SplashScreen',
});


export default createAppContainer(StackNavigation);