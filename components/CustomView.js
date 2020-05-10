import React from 'react';
import { View } from 'react-native';

const CustomView = () => {

    return (
        <View style={{ padding: 10 }}>
            <Card style={{ elevation: 5 }}>
                <View style={{ flexDirection: "row", padding: 10, }}>
                    <View style={{ height: 80, width: 80, borderRadius: 40, backgroundColor: '#F86262' }} />
                    <View>
                        <Card.Content>
                            <Title>Dr jhon Doe</Title>
                            <Paragraph style={{ color: 'green', fontWeight: 'bold' }}>abcd</Paragraph>
                            <Paragraph >mbbs</Paragraph>
                        </Card.Content>
                    </View>
                    <View>
                        <Card.Content>
                            <Paragraph>available date</Paragraph>
                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons name="md-calendar" color='green' size={30} />
                                <Text style={{ fontWeight: 'bold', paddingLeft: 10 }}>5/1/2020</Text>
                            </View>
                        </Card.Content>

                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-around', padding: 10, }}>
                    <Button mode="contained" style={{ backgroundColor: '#F86262', borderRadius: 40 }}>
                        VIEW PROFLE
                    </Button>
                    <Button mode="contained" style={{ backgroundColor: '#F86262', borderRadius: 40 }}>
                        BOOKMARK
                    </Button>
                </View>
                <Card.Content>
                </Card.Content>
            </Card>
        </View>
    )
}
export default CustomView;