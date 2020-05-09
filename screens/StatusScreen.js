import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from '../components/MyHeader';

const StatusScreen = () => {
    return (
        <View style={styles.container}>
            <MyHeader/>
            <Text>I am from status screen</Text>
        </View>
    );
}

export default StatusScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      
    },
});