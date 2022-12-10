import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';

//component prop will take in screens you create

/*
const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home'
                component={HomeScreen}

            />
        </Stack.Navigator>
    );
};


const InfoNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Info'>
            <Stack.Screen
                name='Info'
                component={InfoScreen}

            />
        </Stack.Navigator>
    );
};




    return (
        <HomeStack.Navigator initialRouteName='Home'>
            <HomeStack.Screen name='Home' component={HomeScreen}></HomeStack.Screen>
            <HomeStack.Screen name='Info' component={InfoScreen}></HomeStack.Screen>

        </HomeStack.Navigator>
    )


*/

const MainStack = createStackNavigator();

const Main = () => {

    return (
        <MainStack.Navigator initialRouteName='Home'>
            <MainStack.Screen name='Home' component={HomeScreen}></MainStack.Screen>
            <MainStack.Screen name='Info' component={InfoScreen}></MainStack.Screen>
        </MainStack.Navigator>
    );

};

export default Main;
