import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

import React, { useState, useEffect } from 'react';


// Do I want a flat list here?
//A tester screen with some inline styling
const InfoScreen = ({ navigation }) => {

    const [two, setTwo] = useState(2);
    useEffect (() => {
        console.log(two)
    }, []);

    return (
        <ScrollView style={{ flex: 1 }}>
            <Text style={{ color: 'red' }}>
                This
            </Text>
            <Text style={{ color: 'blue' }}>
                That
            </Text>
            <Text style={{ color: 'teal' }}>
                The Other
            </Text>
            <Button
                title='Go to home screen.'
                onPress={() => navigation.navigate('Home')}>
            </Button>
        </ScrollView>
    );
};


const styles = StyleSheet.create({

});

export default InfoScreen;