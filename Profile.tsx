import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    TestScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

function Profile({navigation}: Props) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>This is the profile page.</Text>
                    <Button
                        title="Home"
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Profile;
