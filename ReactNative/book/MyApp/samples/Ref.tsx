import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 160,
        height: 32,
        borderWidth: 1,
        padding: 4,
    },
    button: {
        padding: 15,
    },
});

export const Ref = () => {
    const ref = React.useRef<TextInput>(null);

    return (
        <View style={styles.container}>
            <TextInput ref={ref} style={styles.input}/>
            <Text
                style={styles.button}
                onPress={() => {
                    ref?.current?.focus();
                }}>
                fucus
            </Text>
        </View>
    );
};
