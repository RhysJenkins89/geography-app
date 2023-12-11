import React, {useState} from 'react';
import type {PropsWithChildren, ReactElement} from 'react';

import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

// Generate a country from a list of countries -- probably organised into continents
// Render this country on the app
// Text input or just a show answer button?

// Render the flag at the beginning -- not when the user guesses
// Render the location on a map after the user presses Reveal answer

// After the user has hit reveal answer, have a button that resets the state of the app

type countryData = {
    country: string;
    capital: string;
};

const countriesList: countryData[] = [
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

const countryDisplayData: countryData = countriesList[randomNum];

console.log('randomNum:', randomNum);
console.log('country:', countryDisplayData);

type functionNoReturn = () => void;

function App(): ReactElement<countryData> {
    const [displayAnswer, setDisplayAnswer] = useState(false);
    const [countryData, setCountryData] = useState<countryData>(
        countriesList[randomNum],
    );

    const randonNumberToReturn: () => number = () => {
        return Math.floor(Math.random() * countriesList.length);
    };

    const handlePress: functionNoReturn = () => {
        console.log('handle press');
        setDisplayAnswer(true);
    };

    const newCountry: functionNoReturn = () => {
        // Reset the display answer button
        // Reset the next country button
        // Render a new country to the screen
        // If this were a browser, I might just reset the page
        setDisplayAnswer(false);
        // Reset the data in countryDisplayData
        setCountryData(countriesList[randonNumberToReturn()]);
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
                        {countryDisplayData.capital}
                    </Text>
                    <TouchableOpacity
                        style={
                            displayAnswer ? styles.display : styles.displayNone
                        }
                        onPress={() => newCountry()}>
                        <Text>Next country</Text>
                    </TouchableOpacity>
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

export default App;
