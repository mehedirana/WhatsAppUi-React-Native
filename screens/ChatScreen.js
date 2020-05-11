import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomView from '../components/CustomView';
import { ScrollView } from 'react-native-gesture-handler';

const ChatScreen = () => {
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

export default ChatScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});