import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from './MyHeader';

const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <MyHeader/>
            <Text>I am from chat screen!</Text>
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