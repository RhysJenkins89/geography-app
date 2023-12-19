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

type CountryData = {
    country: string;
    capital: string;
};

const countriesList: CountryData[] = [
    // pseudo database data
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

function App(): ReactElement<CountryData> {
    // ReactElement probably isn't the best type here
    const [displayAnswer, setDisplayAnswer] = useState(false);
    const [countryData, setCountryData] = useState<CountryData>(
        countriesList[randomNum],
    );
    // const [previousCountry, setPreviousCountry] = useState<string>(
    //     countriesList[randomNum].country,
    // );
    const previousCountry = useRef<string>(countryData.country);

    // console.log('country data:', countryData);
    // console.log('previous country:', previousCountry.current);

    const randonNumberToReturn: () => number = () => {
        return Math.floor(Math.random() * countriesList.length);
    };

    const handlePress: FunctionNoReturn = () => {
        console.log('handle press');
        setDisplayAnswer(true);
    };

    const newCountry: FunctionNoReturn = () => {
        setDisplayAnswer(false);
        let newCountryData: CountryData = countriesList[randonNumberToReturn()]; // state
        function checkCountry(): void {
            console.log('new country', newCountryData.country);
            console.log('prev country', previousCountry.current);
            if (newCountryData.country === previousCountry.current) {
                newCountryData = countriesList[randonNumberToReturn()];
                checkCountry();
            }
        }
        checkCountry();
        setCountryData(countriesList[randonNumberToReturn()]);
    };

    // const setCountryToDisplay: FunctionNoReturn = () => {
    //     if (countryData.country !== previousCountry) return;
    // };

    // Save data in local device storage as soon as possible

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
