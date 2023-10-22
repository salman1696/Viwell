import React, { } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { ApplicationScreenProps } from '../../../../@types/navigation';
import { Colors } from 'MyApp/src/theme/Variables';
import { SafeAreaView } from 'react-native-safe-area-context';


const Home = ({ }: ApplicationScreenProps) => {
    return (
        <SafeAreaView style={styles.centeredView}>
            <StatusBar
                // barStyle={darkMode ? 'light-content' : 'dark-content'}
                barStyle={'light-content'}
            />
            <View style={styles.mainCon1}>
                <Text style={styles.welcomeText}>Welcome</Text>
                <Text style={styles.mainH1}>Home</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    centeredView: { flex: 1, backgroundColor: '#1b1b1b', padding: 10 },
    mainCon1: { flex: 1, alignContent: 'center', width: '100%' },
    welcomeText: {
        fontSize: 15,
        fontWeight: 400,
        color: Colors.textGray200,
        lineHeight: 22,
    },
    mainH1: { fontSize: 28, fontWeight: 700, color: Colors.white },

});


export default Home;
