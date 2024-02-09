import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function TestScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Hello there! This is another screen.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default TestScreen;
