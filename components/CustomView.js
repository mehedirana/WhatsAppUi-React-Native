import React from 'react';
import { View, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const CustomView = (props) => {

    return (
        <View style={{ padding: 10 }}>
            <Card style={{ elevation: 5 }}>
                <View style={{ flexDirection: "row", padding: 10, }}>
                    <View >
                        <Image style={{ height: 80, width: 80, borderRadius: 40 }}
                            source={{ uri: "https://images.firstpost.com/fpimages/1200x800/fixed/jpg/2017/09/arjunreddyfirstlook.jpg" }} />

                    </View>

                    <View>
                        <Card.Content>
                            <Title>{props.name}</Title>
                            <Paragraph style={{ color: 'green', fontWeight: 'bold' }}>abcd</Paragraph>
                            <Paragraph >mbbs</Paragraph>
                        </Card.Content>
                    </View>
                </View>

                <Card.Content>
                </Card.Content>
            </Card>
        </View>
    )
}
export default CustomView;