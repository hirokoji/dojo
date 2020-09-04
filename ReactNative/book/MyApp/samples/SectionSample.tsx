import { SectionList, StyleSheet, Text, View} from "react-native";
import React from "react";
import {defaultStyles} from "../App";

export const SectionSample = () => {
    const styles = StyleSheet.create({
        container: {
            marginTop: 44,
        },
        label: {
            marginBottom: 5,
            textAlign: "center"
        },
        sectionHeader: {
            color: 'white',
            backgroundColor: 'black',
        },
        separator: {
            height: 1,
            backgroundColor: 'gray',
        },
        header: {margin: 10, textAlign: "center"},
        footer: {margin: 10, textAlign: "center"},
    });

    const sections = [
        {title: 'basic', data: ['View', 'Text', 'Image']},
        {title: 'list', data: ['FlatList', 'SectionList']},
        {title: 'intersection', data: ['Touchable*', 'TextInput']}
    ]

    return (
        <View style={defaultStyles.box}>
            <SectionList
                sections={sections}
                style={styles.container}
                renderItem={({item}) => <Text style={styles.label}>{item}</Text>}
                keyExtractor={(_, index) => index.toString()}
                renderSectionHeader={({section: {title}}) => <Text style={styles.sectionHeader}>{title} </Text> }
            />
        </View>
    );
}
