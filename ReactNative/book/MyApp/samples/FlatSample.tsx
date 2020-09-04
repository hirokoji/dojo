import {FlatList, SectionList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {defaultStyles} from '../App';

export const FlatSample = () => {
    const styles = StyleSheet.create({
        label: {
            marginBottom:5,
            textAlign: "center"
        },
        separator: {
            height: 1,
            backgroundColor: 'gray',
        },
        header: { margin: 10, textAlign: "center"},
        footer: { margin: 10, textAlign: "center"},
    });

    const data = [
        {id: 'first', title: 'One'},
        {id: 'second', title: 'Two'},
        {id: 'third', title: 'Thee'},
        {id: 'four', title: 'four'},
        {id: 'five', title: 'five'},
        {id: 'six', title: 'six'},
        {id: 'seven', title: 'seven'},
    ];

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        try {
            setRefreshing(true);
            setTimeout(() => {
                data.unshift({
                    id: new Date().getTime().toString(),
                    title: 'foo',
                });
            }, 200);
        } finally {
            setRefreshing(false);
        }
    }, []);

    const onEndReached = React.useCallback(() => {
        setTimeout(() => {
            data.push({
                id: new Date().getTime().toString(),
                title: 'Added on end reached',
            });
        }, 200);
    }, []);

    const list = React.useRef<FlatList<Item>>(null);
    const scrollToEnd = React.useCallback(() => {
        console.log('Scroll method called');
        // list?.current?.scrollToIndex({index: 6});
        list?.current?.scrollToEnd();
    }, [list]);

    return (
        <View style={defaultStyles.container}>
            <TouchableOpacity onPress={scrollToEnd}>
                <Text> Scroll to End</Text>
            </TouchableOpacity>
            <FlatList
                data={data}
                renderItem={({item}) => <Text style={styles.label}> {item.title} </Text>}
                ListHeaderComponent={() => <Text style={styles.header}> Header </Text>}
                ListFooterComponent={() => <Text style={styles.footer}> Footer </Text>}
                ItemSeparatorComponent={() => <View style={styles.separator}/>}
                refreshing={refreshing}
                onRefresh={onRefresh}
                onEndReached={onEndReached}
                ref={list}
            />
        </View>
    );
};
