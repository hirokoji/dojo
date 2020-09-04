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
import {
    StyleSheet,
    View,
    Text, Alert,
} from 'react-native';
import CustomLabel from "./components/CustomLabel";
import {CountUp} from "./samples/CoutUp";


// Context Sample

const lightTheme = StyleSheet.create({
    containers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'black',
    },
    label: {
        backgroundColor: 'white',
        color: 'black',
    },
});

const darkTheme = StyleSheet.create({
    containers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
    },
    label: {
        backgroundColor: 'black',
        color: 'white',
    },
});

type Theme = typeof lightTheme | typeof darkTheme;
type Context = {
    theme: Theme;
    setTheme: (newTheme: Theme) => void;
};

const ThemeContext = React.createContext<Context>({
    theme: lightTheme,
    setTheme: (_: typeof lightTheme | typeof darkTheme) => {},
});


const App = () => {
    const [theme, setTheme] = React.useState(lightTheme);

    return (
        <>
            <CountUp/>
       </>
    );
};

export default App;
