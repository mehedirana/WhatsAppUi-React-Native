import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from '../components/MyHeader';

const CallScreen = () => {
    return (
        <View style={styles.container}>
            <MyHeader/>
            <Text>i am from call screen</Text>
        </View>
    );
}

export default CallScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
     
    },
});