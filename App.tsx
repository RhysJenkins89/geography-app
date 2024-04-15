import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Home';
import TestScreen from './src/TestScreen';
import RootStackParamList from './types/navigation.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
                    name="TestScreen"
                    component={TestScreen}
                    options={{title: 'Test Screen'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
