/** @format */

import { Colors } from 'MyApp/src/theme/Variables';
import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    GestureResponderEvent,
} from 'react-native';

export const RewardTab = (props: any) => {
    const { state, descriptors, navigation } = props;

    const scrollRef = React.useRef(null);

    useEffect(() => {
        scrollRef.current.scrollTo({ x: state.index * 50, y: 0, animated: true })
    })

    const _renderItem = (
        name: any,
        onPress: ((event: GestureResponderEvent) => void) | undefined,
        focused: boolean,
    ) => {



        return (
            <View
                style={styles.tabCon1}
            >
                <TouchableOpacity
                    style={focused ? styles.foucedStyles : styles.inactiveStyle}
                    onPress={onPress}
                >
                    <Text
                        style={[styles.tabText, {
                            color: focused ? Colors.primary : '#fff',
                        }]}
                    >
                        {name}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView ref={list => scrollRef.current = list} horizontal={true} showsHorizontalScrollIndicator={false}>
                {state.routes.map(
                    (route: { name: string; key: string | number }, index: any) => {
                        // console.log(route.name, 'route');
                        const { options } = descriptors[route.key];
                        // console.log(options, 'route');
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
                                navigation.navigate(route.name);
                            }
                        };

                        return _renderItem(label, onPress, isFocused);
                    },
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 90,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#eee',
        elevation: 5,
        alignSelf: 'center',
        padding: 5,
        justifyContent: 'center',
    },
    foucedStyles: {
        padding: 5,
        borderWidth: 1.5,
        borderColor: Colors.primary,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        marginHorizontal: 5,
        flexDirection: 'row',
        paddingHorizontal: 25,
    },
    inactiveStyle: {
        borderRadius: 25,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 3,
    },
    tabCon1: {
        alignItems: 'center',
        paddingHorizontal: 4,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    tabText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600',
    }
});
