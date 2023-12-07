import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';

import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
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

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [displayAnswer, setDisplayAnswer] = useState(false);

    const handlePress = () => {
        console.log('handle press');
        setDisplayAnswer(true);
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>
                        What is the capital of {countryDisplayData.country}?
                    </Text>
                    <Button
                        title="Reveal answer"
                        onPress={() => handlePress()}></Button>
                    <Text
                        style={
                            displayAnswer ? styles.display : styles.displayNone
                        }>
                        {countryDisplayData.capital}
                    </Text>
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
