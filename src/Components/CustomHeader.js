import React from 'react';
import { View, StyleSheet, Text, Image, Platform, TouchableOpacity } from 'react-native';
import DrawerIcon from '../Utilities/Logo';
import Color from '../Utilities/Color';
import { Icon, Avatar } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import {scale, verticalScale, moderateScale} from '../Utilities/CustomSize';
export default class CustomHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={{ flexDirection:'row',backgroundColor: Color.headerColor.headerBack,alignContent:'space-between' }}>
                <View style={{flexDirection:'row',marginTop:verticalScale(18),paddingBottom:verticalScale(15),width:'78%'}}>
                    {/*Donute Button Image */}
                    <Icon name={DrawerIcon.drawerImage.location} containerStyle={iconStyle} type={DrawerIcon.types.Octicons} color={Color.iconColor.tintColor} size={28} />
                    <TouchableOpacity style={{ marginLeft: 10, paddingRight: 2 }} onPress={() => this.props.navigation.navigate('Location')}>
                        <Text style={{ color: Color.ImageColor.whites, paddingLeft: 10, fontSize: 16, paddingTop: 4 }}>Location</Text>
                    </TouchableOpacity>
  
                </View>
                <View style={{ flexDirection:'row',marginTop:verticalScale(18)}}>
                    <TouchableOpacity style={{ alignItems: 'flex-start', paddingRight: 20, paddingTop: 3 }} onPress={() => alert('Notification')}>
                        {/*Donute Button Image */}
                        <Icon name={DrawerIcon.drawerImage.notification} type={DrawerIcon.types.fontAwesome} color={Color.iconColor.tintColor} size={28} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'flex-start', paddingRight: 7 }} onPress={() => this.props.navigation.openDrawer()}>
                        {/*Donute Button Image */}
                        <Avatar
                            rounded
                            source={{
                                uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}


// export const CustomHeader = ({ navigation }) => {
//     // console.log("navigation.state",navigation.state.locationSave)
//     return (

//     )
// }


// export const HeaderRight = ({ navigation }) => {
//     return (

//     )
// }

export const SearchBarHeader = ({ navigation }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ alignItems: 'flex-start', paddingRight: 10, paddingTop: 3, paddingLeft: 5 }} onPress={() => navigation.goBack(null)}>
                {/*Donute Button Image */}
                <Icon name='arrow-left' type='feather' color={Color.iconColor.tintColor} size={28} />
            </TouchableOpacity>
        </View>
    )
}

const iconStyle = {
    marginLeft: scale(10),
}