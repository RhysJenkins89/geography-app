import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
        auth().createUserWithEmailAndPassword(username, password);
        setUsername('');
        setPassword('');
    };

    return (
        <View>
            <Text>Username:</Text>
            <TextInput
                onChangeText={text => setUsername(text)}
                value={username}
                placeholder="Enter your username"
            />
            <Text>Password:</Text>
            <TextInput
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="Enter your password"
                secureTextEntry
            />
            <TouchableOpacity onPress={handleLogin}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
