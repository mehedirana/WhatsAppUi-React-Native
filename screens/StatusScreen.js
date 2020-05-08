import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StatusScreen = () => {
    return (
        <View style={styles.container}>
            <Text>I am from status screen</Text>
        </View>
    );
}

export default StatusScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});