import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Logo from '../Utilities/Logo';
import color from '../Utilities/Color'
export default class CustomSidebarMenu extends Component {
    constructor() {
        super();
     
        this.items = [
            {
                navOptionThumb: 'home',
                navOptionName: 'Home',
                screenToNavigate: 'Home',
            },
            {
                navOptionThumb: 'address-card',
                navOptionName: 'About us',
                screenToNavigate: 'AboutScreen',
            },
            {
                navOptionThumb: 'user-circle',
                navOptionName: 'Profile',
                screenToNavigate: 'Profile',
            },
            {
                navOptionThumb: 'cogs',
                navOptionName: 'Settings',
                screenToNavigate: 'Setting',
            },
            {
                navOptionThumb: 'street-view',
                navOptionName: 'Contact us',
                screenToNavigate: 'Contact',
            },
            {
                navOptionThumb: 'shopping-cart',
                navOptionName: 'Cart',
                screenToNavigate: 'Cart',
            }
        ];
    }
    render() {
        return (
            <View style={styles.sideMenuContainer}>
                {/*Top Large Image */}
                <Image
                    source={Logo.profile.Logo}
                    style={styles.sideMenuProfileIcon}
                />
                {/*Divider between Top Image and Sidebar Option*/}
                <View
                    style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: '#e2e2e2',
                        marginTop: 15,
                    }}
                />
                {/*Setting up Navigation Options from option array using loop*/}
                <View style={{ width: '100%' }}>
                    {this.items.map((item, key) => (
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingTop: 10,
                                paddingBottom: 10,
                                borderBottomColor:global.currentScreenIndex === key ? '#000' : '#fff',
                                borderBottomWidth:1,
                                backgroundColor: global.currentScreenIndex === key ? '#fff' : color.headerColor.headerBack,
                            }}
                            key={key} onPress={() => {
                                global.currentScreenIndex = key;
                                this.props.navigation.navigate(item.screenToNavigate),
                                    this.props.navigation.closeDrawer()
                            }}>

                            <View style={{ marginRight: 10, marginLeft: 20 }}>
                                <Icon name={item.navOptionThumb} size={25} type="font-awesome" color={global.currentScreenIndex === key ? '#000' : '#fff'} />
                            </View>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: global.currentScreenIndex === key ? '#000' : '#fff',
                                }}
                            >
                                {item.navOptionName}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: color.headerColor.headerBack,
        alignItems: 'center',
        paddingTop: 20,
    },
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 200,
        height: 150,
        marginTop: 10,
        borderRadius: 150 / 2,
    },
});