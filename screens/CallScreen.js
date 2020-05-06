import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CallScreen = () => {
    return (
        <View style={styles.container}>
            <Text>i am from call screen</Text>
        </View>
    );
}

export default CallScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});