import React from "react";
import {AppState, Clipboard, StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {defaultStyles} from "../App";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
});

export const ClipboardSample = () => {
    const [content, setContent] = React.useState('');
    React.useEffect(() => {
        const getContentOfClipboard = () => {
            Clipboard.getString().then(newContent => setContent(newContent));
        };

        getContentOfClipboard();
        AppState.addEventListener('change', getContentOfClipboard);
        return () => {
            AppState.removeEventListener('change', getContentOfClipboard);
        };
    },[]);

    return (
        <View style={defaultStyles.container}>
            <TouchableOpacity
                onPress={() => {
                    const newContent = 'Check your clipboard';
                    Clipboard.setString(newContent);
                    setContent(newContent);
                }}
            >
                <Text> set clipbaord </Text>
            </TouchableOpacity>
            <Text> {content} </Text>
        </View>
    );
};
