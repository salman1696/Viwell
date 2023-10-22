import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ApplicationScreenProps } from '../../../../@types/navigation';
import { Colors } from 'MyApp/src/theme/Variables';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RewardTab } from './rewardTab';
import Completed from './RewardTab/RewardTab';
import { StatusBar } from 'react-native';
import { useTheme } from 'MyApp/src/hooks';

const Reward = ({ navigation }: ApplicationScreenProps) => {
    const { Layout, Images } = useTheme();
    const Tab = createMaterialTopTabNavigator();



    const tabList = [
        {
            id: 1,
            title: 'All',
            iconName: 'clock_outline',
        },
        {
            id: 2,
            title: 'Electronics and Communication',
            iconName: 'check',
        },
        {
            id: 2,
            title: 'Fashion and Design',
            iconName: 'check',
        },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar
                // barStyle={darkMode ? 'light-content' : 'dark-content'}
                barStyle={'light-content'}
            />
            <View style={styles.mainCon1}>
                <Image source={Images.sparkles.logo} style={styles.imgCon} resizeMode={'contain'} />
                <View style={[Layout.row, Layout.center]}>
                    <Text style={styles.rewardText}>2,980</Text>
                    <Icon
                        style={{ paddingHorizontal: 10 }}
                        name={'diamond'}
                        color={Colors.primary}
                        type="font-awesome"
                        size={25}
                    />
                    <Icon
                        style={{ paddingHorizontal: 10 }}
                        name={'calendar'}
                        color={Colors.white}
                        type="antdesign"
                        size={25}
                    />
                    <Icon
                        style={{ paddingHorizontal: 10 }}
                        name={'bell'}
                        color={Colors.white}
                        type="feather"
                        size={25}
                    />
                </View>
            </View>
            <View>
                <View style={styles.mainCon2}>
                    <Text style={styles.avaText}>Available Rewards</Text>
                    <TouchableOpacity style={styles.myRewardCon1}>
                        <Text style={styles.myRewardText}>My Rewards</Text>
                        <Icon
                            style={{ paddingHorizontal: 10 }}
                            name={'arrow-right'}
                            color={Colors.primary}
                            type="feather"
                            size={25}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.pgText}>
                    Treat yourself by checking out the variety of rewards you can swap
                    your point for Keep on Progressing to gain more points and rewards
                </Text>
            </View>
            <View style={[Layout.fill]}>
                <Tab.Navigator
                    tabBar={(props: any) => <RewardTab {...props} />}
                    initialRouteName={'AllDates'}
                >
                    {tabList?.map((elm: any) => {
                        return (
                            <Tab.Screen
                                name={elm.title}
                                component={Completed}
                                options={{
                                    tabBarLabel: elm.title,
                                }}
                                iconName={elm.iconName}
                            />
                        );
                    })}
                </Tab.Navigator>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#1b1b1b',
        padding: 10,
    },
    mainCon1: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logoText: {
        flex: 1,
        fontSize: 24,
        fontWeight: '700',
        color: Colors.white,
    },
    rewardText: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.white,
    },
    mainCon2: {
        paddingTop: 30,
        paddingBottom: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avaText: { fontSize: 22, fontWeight: '700', color: Colors.white },
    myRewardCon1: {
        padding: 14,
        backgroundColor: Colors.light,
        flexDirection: 'row',
        borderRadius: 6,
    },
    myRewardText: { fontSize: 17, fontWeight: '700', color: Colors.primary },
    pgText: {
        fontSize: 14,
        fontWeight: 500,
        color: Colors.white,
        marginTop: 4,
        lineHeight: 22,
    },
    imgCon: { width: 150, height: 25 },
});

export default Reward;
