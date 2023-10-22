/** @format */

import React from 'react';
import { Image, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TabBar } from './tab';
import { Colors } from 'MyApp/src/theme/Variables';
import Reward from './Reward/Reward';
import Menu from './Menu/Menu';
import Home from './Home';
import Trends from './Trends/Trends';



const Tab = createBottomTabNavigator();

const MainFlow = ({ navigation }: { navigation: any }) => {
    // const { t, i18n } = useTranslation();
    <StatusBar
        // barStyle={darkMode ? 'light-content' : 'dark-content'}
        barStyle={'light-content'}
    />
    return (
        <Tab.Navigator
            useLegacyImplementation
            screenOptions={{ headerShown: false }}
            tabBar={(props: any) => <TabBar {...props} />}
            // initialRouteName={
            //   route?.params?.route === 'ProfileTabs' ? 'Profile' : null
            // }
            initialRouteName={'Home'}
            tabBarOptions={{
                activeTintColor: '#000',
                style: {
                    borderWidth: 0.5,
                    borderBottomWidth: 1,
                    backgroundColor: Colors.primary,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderColor: 'grey',
                    position: 'absolute',
                },
            }}
        >
            <Tab.Screen
                component={Home}
                name={'Home'}
                options={{
                    tabBarLabel: 'Home',

                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={offer1}
                            resizeMode={'contain'}
                            style={{ height: 42, width: 42, marginHorizontal: 5 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                component={Trends}
                name={'Trends'}
                options={{
                    tabBarLabel: 'Trends',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="reorder" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                component={Menu}
                name={'Check-in'}
                options={{
                    tabBarLabel: 'Check-in',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                component={Reward}
                name={'Reward'}
                options={{
                    tabBarLabel: 'Reward',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                component={Menu}
                name={'Menu'}
                options={{
                    tabBarLabel: 'Menu',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default MainFlow;
