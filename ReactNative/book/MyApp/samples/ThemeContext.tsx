import {StyleSheet} from "react-native";
import React from "react";

export const lightTheme = StyleSheet.create({
    containers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'black',
        borderWidth: 1,
        width: '100%',
    },
    label: {
        backgroundColor: 'white',
        color: 'black',
    },
});

export const darkTheme = StyleSheet.create({
    containers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        borderWidth: 1,
        width: '100%',
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

export const ThemeContext = React.createContext<Context>({
    theme: lightTheme,
    setTheme: (_: typeof lightTheme | typeof darkTheme) => {},
});
