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
import { StyleSheet, View, Text, Alert } from 'react-native';
import { CountUp } from './samples/CoutUp';
import { Profile } from './samples/Pofile';

import { ThemeContext, lightTheme, darkTheme } from './samples/ThemeContext';

const App = () => {
    const [theme, setTheme] = React.useState(lightTheme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Text> Hoge </Text>
            <Text> Hoge </Text>
            <Text> Hoge </Text>
            <Text> Hoge </Text>
            <Text
                onPress={() =>
                    setTheme(theme === lightTheme ? darkTheme : lightTheme)
                }
                style={theme.label}
            >
                Change Theme
            </Text>
            <Profile name="januswel" />
            <CountUp />
        </ThemeContext.Provider>
    );
};

export default App;
