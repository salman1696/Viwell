import React, { useMemo, useState } from 'react';
import { Alert, ImageBackground, Text } from 'react-native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from 'MyApp/src/theme/Variables';
import { useTheme } from 'MyApp/src/hooks';
import { Icon } from 'react-native-elements';
import { setSelectedReward } from 'MyApp/src/store/userReducer';
import { useDispatch } from 'react-redux';

interface Props {
    item: object;
    navigation: any;
}

const RewardModal = ({ item, navigation }: Props) => {
    const { Layout, Images } = useTheme();
    const reward = useMemo(() => item, []);
    const disptach = useDispatch();

    return (
        <TouchableOpacity
            onPress={() => {
                disptach(setSelectedReward(reward));
                navigation.push('RewardDetail');
            }}
            style={styles.mainCon1}
        >
            <ImageBackground
                source={Images.sparkles.item_bg}
                resizeMode={'stretch'}
                style={styles.bgImgCon1}
            >
                <View style={[Layout.fill, { width: '100%' }]}>
                    <Text style={styles.h1Text}>{reward?.title}</Text>
                    <Text style={styles.h2Text}>{reward?.subTitle}</Text>
                </View>
                <View style={styles.h3Bg}>
                    <Text style={styles.h3Text}>Get it for {reward?.amount}</Text>
                    <Icon
                        name={'diamond'}
                        color={Colors.primary}
                        type="font-awesome"
                        size={22}
                    />
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainCon1: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 14,
        flex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    bgImgCon1: {
        padding: 15,
        borderRadius: 10,
        height: 220,
    },
    h1Text: {
        width: '100%',
        fontSize: 27,
        fontWeight: '700',
        color: Colors.white,
    },
    h2Text: {
        marginTop: 2,
        fontSize: 25,
        fontWeight: '400',
        color: Colors.white,
    },
    h3Bg: {
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        alignSelf: 'flex-start',
        alignItems: 'center',
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        backgroundColor: '#00000060',
        padding: 7,
    },
    h3Text: {
        fontSize: 19,
        fontWeight: 500,
        color: Colors.white,
        paddingEnd: 5,
    },
});

export default RewardModal;
