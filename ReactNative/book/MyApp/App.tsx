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
        const styles = StyleSheet.create({
            box: {
                flex: 1,
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
            },
        });

        return (
            <View style={styles.box}>
                <Text
                    onPress={() =>
                        setTheme(theme === lightTheme ? darkTheme : lightTheme)
                    }
                    style={theme.label}
                >
                    Change Theme
                </Text>
                <Profile name="januswel"/>

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
