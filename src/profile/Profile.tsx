import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../types/navigation.types';

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
