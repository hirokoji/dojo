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
import { Ref} from "./samples/Ref";

import { ThemeContext, lightTheme, darkTheme } from './samples/ThemeContext';



const App = () => {

    const [theme, setTheme] = React.useState(lightTheme);

    const ContextSample = () => {

        return (
            <View style={theme.containers}>
                <Text
                    onPress={() =>
                        setTheme(theme === lightTheme ? darkTheme : lightTheme)
                    }
                    style={theme.label}
                >
                    Click Me!! (Change Theme)
                </Text>

            </View>
        );
    };


    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Ref/>
            <ContextSample/>
            <CountUp />
        </ThemeContext.Provider>
    );
};

export default App;
