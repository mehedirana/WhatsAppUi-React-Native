import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import CustomView from '../components/CustomView';

const CallScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <CustomView name="rajib" />
                <CustomView name="imran" />
                <CustomView name="mashuk" />
                <CustomView name="mehedi" />
                <CustomView name="shahidulla" />
            </ScrollView>
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