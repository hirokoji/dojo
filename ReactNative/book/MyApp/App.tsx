/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import { CountUp } from './samples/CoutUp';
import { Ref} from "./samples/Ref";
import {FlatSample} from "./samples/FlatSample";

import { ThemeContext, lightTheme, darkTheme } from './samples/ThemeContext';
import {SectionSample} from "./samples/SectionSample";
import {AlertSample} from "./samples/AlartSample";
import {ClipboardSample} from "./samples/ClipboardSample";


export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'black',
        width: '100%',
        borderWidth: 1,
    },
});

const App = () => {

    const [theme, setTheme] = React.useState(lightTheme);

    const ContextSample = () => {
        return (
            <View style={theme.containers}>
                <Text
                    onPress={() => setTheme(theme === lightTheme ? darkTheme : lightTheme)}
                    style={theme.label}>
                    <Text style={{ fontWeight: "bold"}}> Click Me!! </Text>
                    <Text> ~ change theme ~ </Text>
                </Text>
            </View>
        );
    };



    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <SafeAreaView style={defaultStyles.container}>
                <Ref/>
                <ContextSample/>
                <CountUp />
                <FlatSample/>
                <SectionSample/>
                <AlertSample/>
                <ClipboardSample/>
            </SafeAreaView>
        </ThemeContext.Provider>
    );
};

export default App;

