import {SafeAreaView, ScrollView, Text, View, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    TestScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

function TestScreen({navigation}: Props) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Hello there! This is another screen.</Text>
                    <Button
                        title="Home"
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default TestScreen;
