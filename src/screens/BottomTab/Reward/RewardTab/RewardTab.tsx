import React, { useState } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { ApplicationScreenProps } from '../../../../@types/navigation';
import { FlatList } from 'react-native';
import { RewardModal } from 'MyApp/src/components';

const RewardTab = ({ navigation }: ApplicationScreenProps) => {
    const [list, setFavItems] = useState([
        {
            key: 1,
            title: 'Get 5% off Dropkicks AED',
            subTitle: 'Dropkicks',
            amount: '500',
        },
        {
            key: 2,
            title: 'Get 10% off ASOS AED',
            subTitle: 'ASOS',
            amount: '800',
        },
        {
            key: 3,
            title: 'Get 15% off Zappos AED',
            subTitle: 'Zappos',
            amount: '1200',
        },
    ]);

    return (
        <View style={styles.mainCon1}>
            <FlatList
                data={list}
                showsVerticalScrollIndicator={false}
                pagingEnabled={true}
                renderItem={({ item, index }: any) => (
                    <RewardModal item={item} navigation={navigation} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainCon1: {
        flex: 1,
        backgroundColor: '#1b1b1b',
        alignContent: 'center',
        padding: 10,
        marginBottom: 25,
    },
});

export default RewardTab;
