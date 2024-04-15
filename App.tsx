import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Home';
import Profile from './src/profile/Profile';
import RootStackParamList from './src/types/navigation.types';

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
                    name="Profile"
                    component={Profile}
                    options={{title: 'Profile'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
