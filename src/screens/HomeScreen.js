import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Button, Card } from 'react-native-elements';
import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';



// Do I want a flat list here?
//A tester screen with some inline styling
const HomeScreen = ({ navigation }) => {

    const [info, setInfo] = useState(null);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetch('https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=47.530102&lon=-122.032616', options)
                .then(response => response.json())
                .then((data) => setInfo(data))
                .catch(err => console.error(err));

        };
        fetchData();

        console.log(info);
        //  console.log(info.results);
        //   console.log(info.trailArray[0]);
    }, []);




    const renderItem = ({ item }) => {
        return (
            item.thumbnail != null ? (
                <View style={styles.item}>
                    <Card containerStyle={styles.cardContainer}>
                        <Card.Image source={{ uri: item.thumbnail }}>
                            <View style={{ justifyContent: 'center', flex: 1, width: 394, height: 250 }}>
                                <Text style={styles.cardText}>{item.name}</Text>
                            </View>
                        </Card.Image>
                        <ScrollView style={{ backgroundColor: 'darkturquoise', borderColor: '#4d7575', borderTopWidth: 5 }}>
                            <Text style={{ margin: 20 }}>{item.description}</Text>
                        </ScrollView>

                    </Card>
                </View>
            )
                :
                (
                    <View></View>
                )
        );
    }


    return (
        <View style={{ flex: 1 }}>
            <Button
                style={styles.getButton}
                title='Press for Issaquah Trails'
            />
            <Button
                style={styles.getButton}
                title='Go to Info Screen'
                buttonStyle={{
                    backgroundColor: 'green',
                }}
                onPress={() => navigation.navigate('Info')}
            />
            <View style={{ padding: 5 }}>
            </View>
            {
                info != null ? (<View >
                    <FlatList data={info.data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        ListFooterComponentStyle={{ flex: 1, backgroundColor: 'red' }}
                        ListFooterComponent={<View>
                            <Text style={{ color: 'white', textAlign: 'center' }}>
                                Extraneous
                            </Text>
                        </View>}
                    />

                </View>)
                    : (<ActivityIndicator size="large" color="#00ff00" />
                    )
            }

        </View >
    );
};


const styles = StyleSheet.create({
    getButton: {
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 700,
        paddingTop: 5,
    },
    item: {
        backgroundColor: 'darkturquoise',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: 'center',
        //   justifyContent: 'center',
        height: 400,
        borderRadius: 15,
        fontSize: 20,
        fontWeight: 600
    },
    title: {
        fontSize: 20,
    },
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderColor: '#4d7575',
    },
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    cardText: {
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 20,
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
});

export default HomeScreen;