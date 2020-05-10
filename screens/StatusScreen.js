import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomView from '../components/CustomView';

const StatusScreen = () => {
    return (
        <View style={styles.container}>
            <CustomView/>
            <CustomView/>
            <CustomView/>
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