import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Home';
import TestScreen from './TestScreen';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{title: 'Home'}}
                />
                <Stack.Screen
                    name="Testing"
                    component={TestScreen}
                    options={{title: 'Test Screen'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
