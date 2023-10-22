/* eslint-disable prettier/prettier */
/** @format */

import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    Image,
} from 'react-native';
// import {hasNotch} from 'react-native-device-info';
import { Icon } from 'react-native-elements';

import { Colors } from 'MyApp/src/theme/Variables';
import { useTheme } from 'MyApp/src/hooks';

export const TabBar = (props: any) => {
    const { state, descriptors, navigation } = props;

    const { Images } = useTheme();



    const IconStyle = {
        Home: {
            icon: Images.sparkles.home,
            iconfilled: Images.sparkles.home_fill,
            family: 'material-community',
            key: 'Home',
        },
        Trends: {
            icon: Images.sparkles.positive,
            iconfilled: Images.sparkles.positive_fill,
            family: 'font-awesome',
            key: 'explore',
        },
        "Check-in": {
            icon: Images.sparkles.case,
            iconfilled: Images.sparkles.home_fill,
            family: 'font-awesome',
            key: 'explore',
        },
        Reward: {
            icon: Images.sparkles.gift,
            iconfilled: Images.sparkles.gift_fill,
            family: 'feather',
            key: 'Calender',
        },
        Menu: {
            icon: Images.sparkles.menu,
            iconfilled: Images.sparkles.menu_fill,
            family: 'feather',
            key: 'Account',
        },
    };

    const _renderItem = (
        index: string,
        name: string,
        onPress: any,
        focused: any,
    ) => {
        let _icon = IconStyle[name];

        // alert(nav);
        return (
            <View
                key={index}
                style={styles.mainCon1}
            >
                <TouchableOpacity
                    style={focused ? [styles.foucedStyles] : [styles.inactiveStyle]}
                    onPress={onPress}
                >
                    {name === "Check-in" ?
                        <View style={styles.checkinCon}>
                            <Icon
                                name={'plus'}
                                type="antdesign"
                                size={20}
                                color={Colors.bgGray}
                            />
                        </View> :
                        focused ?
                            <Image
                                source={focused ? _icon.iconfilled : _icon.icon}
                                resizeMode={'contain'}
                                style={[styles.imgCon, {

                                    tintColor: focused ? Colors.primary : Colors.white,
                                }]}
                            />
                            :
                            <Image
                                source={focused ? _icon.iconfilled : _icon.icon}
                                resizeMode={'contain'}
                                style={
                                    [styles.imgCon, { tintColor: focused ? Colors.primary : Colors.white, }]
                                }
                            />
                    }

                    <Text
                        style={[styles.tabText, {
                            fontWeight: focused ? '500' : '300',
                        }]}
                    >
                        {name}
                    </Text>
                </TouchableOpacity >
                {focused && (
                    <View style={styles.underline}></View>
                )}
            </View >
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });


                    if (!isFocused && !event.defaultPrevented) {
                        route.name !== 'Courses' && navigation.navigate(route.name);
                    }
                };

                return _renderItem(index, label, onPress, isFocused);
            })}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? 85 : 75,
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.bgGray,
        flexDirection: 'row',
        borderColor: '#eee',
        position: 'absolute',

        bottom: 0,
        alignSelf: 'flex-start',
        elevation: Platform.OS === 'android' ? Number.MAX_SAFE_INTEGER : undefined,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    foucedStyles: {
        // marginTop: 10,
        alignItems: 'center',
        paddingHorizontal: 10,
        // marginHorizontal: 5,

        // width: Platform.OS === 'ios' ? 109 : 69,
    },
    inactiveStyle: {
        alignItems: 'center',
        // marginHorizontal: 5,
        paddingHorizontal: 10,

    },
    imgCon: {
        height: 28,
        width: 28,
    },
    mainCon1: {
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 10,
    },
    checkinCon: {
        paddingHorizontal: 21,
        paddingVertical: 6,
        backgroundColor: Colors.primary, borderRadius: 5,
        alignItems: 'center', justifyContent: "center"
    },
    tabText: {
        fontSize: 14,
        marginLeft: 3,
        top: 2,
        textAlign: 'center',
        color: Colors.white,
    },
    underline: {
        position: 'absolute',
        bottom: -8,
        width: 15,
        height: 6,
        borderRadius: 10,
        backgroundColor: Colors.primary,
    }
});
