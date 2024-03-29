import React, {useState, useRef} from 'react';
import type {PropsWithChildren, ReactElement} from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type CountryData from './types/home.types';
import LoginScreen from './login/Login';

const countriesList: CountryData[] = [
    // pseudo database data
    // These data should live in Firebase
    {
        country: 'United Kingdom',
        capital: 'London',
    },
    {
        country: 'France',
        capital: 'Paris',
    },
    {
        country: 'Germany',
        capital: 'Berlin',
    },
    {
        country: 'Spain',
        capital: 'Madrid',
    },
    {
        country: 'Italy',
        capital: 'Rome',
    },
];

const randomNum: number = Math.floor(Math.random() * countriesList.length);

type FunctionNoReturn = () => void; // better way probably

type RootStackParamList = {
    Home: undefined;
    TestScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

function HomeScreen({navigation}: Props): ReactElement<CountryData> {
    // ReactElement probably isn't the best type here
    const [displayAnswer, setDisplayAnswer] = useState(false);
    const [countryData, setCountryData] = useState<CountryData>(
        countriesList[randomNum],
    );

    const previousCountry = useRef<string>(countryData.country);

    const randomNumberToReturn: () => number = () => {
        return Math.floor(Math.random() * countriesList.length);
    };

    const handlePress: FunctionNoReturn = () => {
        setDisplayAnswer(true);
    };

    const newCountry: FunctionNoReturn = () => {
        // Prettier setting for format
        const countryDataWithoutPrevCountry: CountryData[] =
            countriesList.filter(item => {
                return item.country != previousCountry.current;
            });
        const nextCountry: CountryData =
            countryDataWithoutPrevCountry[
                Math.floor(Math.random() * countryDataWithoutPrevCountry.length)
            ];
        previousCountry.current = nextCountry.country;
        setDisplayAnswer(false);
        setCountryData(nextCountry);
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>What is the capital of {countryData.country}?</Text>
                    <TouchableOpacity
                        style={
                            displayAnswer ? styles.displayNone : styles.display
                        }
                        onPress={() => handlePress()}>
                        <Text>Reveal answer</Text>
                    </TouchableOpacity>
                    <Text
                        style={
                            displayAnswer ? styles.display : styles.displayNone
                        }>
                        {countryData.capital}
                    </Text>
                    <TouchableOpacity
                        style={
                            displayAnswer ? styles.display : styles.displayNone
                        }
                        onPress={() => newCountry()}>
                        <Text>Next country</Text>
                    </TouchableOpacity>
                    <Button
                        title="Test button"
                        onPress={() => navigation.navigate('TestScreen')}
                    />
                    <LoginScreen />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    displayNone: {
        display: 'none',
    },
    display: {
        display: 'flex',
    },
});

export default HomeScreen;
