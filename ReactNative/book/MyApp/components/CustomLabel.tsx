import React from "react";
import {StyleSheet, Text} from "react-native";

type Props = {
    backgroundColor: string,
    color: string;
    label: string;
};

const styles = StyleSheet.create({
    lablel: {
        marginTop: 100,
        padding: 8,
        fontSize: 24,
    },
});

export default function CustomLabel(props:Props){

    const {backgroundColor, color, label } = props;
    return <Text style={[styles.label, {backgroundColor, color }]}> {label}</Text>;
}

CustomLabel.defaultProps = {
    backgroundColor: '#008080',
    color: 'while',
    label: 'hello',
}
