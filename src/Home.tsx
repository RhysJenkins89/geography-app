import React, {useState, useRef} from 'react';
import type {ReactElement} from 'react';
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
import RootStackParamList from './types/navigation.types';
import type CountryData from './types/home.types';
// import LoginScreen from './login/Login';

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

type Props = NativeStackScreenProps<RootStackParamList>;

function HomeScreen({navigation}: Props): ReactElement<CountryData> {
    const [randomNumber, setRandomNumber] = useState<number>(
        Math.floor(Math.random() * countriesList.length),
    );
    const [displayAnswer, setDisplayAnswer] = useState<boolean>(false);
    const [countryData, setCountryData] = useState<CountryData>(
        countriesList[randomNumber],
    );

    const previousCountry = useRef<string>(countryData.country);

    const handlePress = () => {
        setDisplayAnswer(true);
    };

    const newCountry = () => {
        const countryDataWithoutPrevCountry: CountryData[] =
            countriesList.filter(item => {
                return item.country !== previousCountry.current;
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
                        title="Profile"
                        onPress={() => navigation.navigate('Profile')}
                    />
                    {/* <LoginScreen /> */}
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
