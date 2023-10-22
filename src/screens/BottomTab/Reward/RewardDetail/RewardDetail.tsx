import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../../hooks';
import { ApplicationScreenProps } from '../../../../../@types/navigation';
import { Colors } from 'MyApp/src/theme/Variables';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import FAB from 'react-native-fab';
import { useSelector } from 'react-redux';

const RewardDetail = ({ navigation }: ApplicationScreenProps) => {
    const { Images } = useTheme();
    const { selectReward } = useSelector((state: any) => state.user);

    return (
        <SafeAreaView style={styles.safeAreaCon}>
            <View style={styles.mainCon1}>
                <ImageBackground
                    source={Images.sparkles.main_img}
                    resizeMode={'cover'}
                    style={styles.bgImg}
                >
                    <View style={styles.bgCon}>
                        <TouchableOpacity
                            onPress={() => navigation.pop()}
                            style={styles.backBtnCon}
                        >
                            <Icon
                                name={'arrowleft'}
                                type="antdesign"
                                color={Colors.white}
                                size={28}
                            />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.mainText1}>{selectReward?.title}</Text>
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.itemDetailCon}>
                    <View style={styles.rewardLeftCon}>
                        <Text style={styles.rewardLeftText}>
                            213 days left . {selectReward?.amount}
                        </Text>

                        <Icon
                            style={{ paddingHorizontal: 5 }}
                            name={'diamond'}
                            color={Colors.primary}
                            type="font-awesome"
                            size={16}
                        />
                    </View>
                    <Text style={styles.rewardSubText}>{selectReward?.subTitle}</Text>
                    <Text style={styles.rewardMainText}>{selectReward?.title}</Text>
                    <Text style={styles.rewardMainText2}>{selectReward?.title}</Text>
                </View>

                <FAB
                    buttonColor={Colors.bgGray}
                    visible={true}
                    iconTextComponent={<Icon name="message" color={Colors.primary} />}
                />
            </View>

            <TouchableOpacity
                onPress={() => navigation.pop()}
                style={styles.redeemBtn}
            >
                <Text style={styles.redeemText}>Redeem</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaCon: { flex: 1, backgroundColor: '#1b1b1b' },
    mainCon1: { flex: 1, justifyContent: 'flex-start', marginBottom: 40 },
    bgImg: {
        borderRadius: 10,
        height: 250,
    },
    bgCon: {
        flex: 1,
        backgroundColor: '#00000030',
        padding: 15,
    },
    backBtnCon: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
    },
    itemDetailCon: { marginVertical: 15, alignSelf: 'flex-start', padding: 15 },
    mainText1: {
        fontSize: 27,
        fontWeight: '700',
        shahdow: 20,
        color: Colors.white,
    },
    rewardLeftCon: { alignItems: 'center', flexDirection: 'row' },
    rewardLeftText: {
        alignItem: 'center',
        fontSize: 16,
        fontWeight: '400',
        color: Colors.white,
        textAlign: 'left',
    },
    rewardSubText: {
        marginVertical: 20,
        alignItem: 'center',
        fontSize: 16,
        fontWeight: '400',
        color: Colors.white,
        textAlign: 'left',
    },
    rewardMainText: {
        fontSize: 27,
        fontWeight: '700',
        shahdow: 20,
        color: Colors.white,
    },
    rewardMainText2: {
        marginVertical: 15,
        fontSize: 23,
        fontWeight: '400',
        color: Colors.white,
    },
    redeemBtn: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        borderRadius: 7,
        padding: 15,
        position: 'absolute',
        bottom: 25,
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    redeemText: {
        fontSize: 20,
        width: '100%',
        textAlign: 'center',
        fontWeight: '700',
        color: Colors.textGray,
    },
});

export default RewardDetail;
