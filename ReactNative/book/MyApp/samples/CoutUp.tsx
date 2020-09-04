import React from "react";
import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texts:{
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    text1: {
        fontSize: 16,
    },
    text2: {
        fontSize: 32,
    },
    text3: {
        fontSize: 16,
    },
    box: {
        borderWidth: 1,
    },
});


const A = () => {
    React.useEffect(() => {
        console.log('A effect');
        return () => {
            console.log('A cleanup');
        };
    });

    return <Text>A</Text>
};

const B = () => {
    React.useEffect(() => {
        console.log('B effect');
        return () => {
            console.log('B cleanup');
        };
    });

    return <Text>B</Text>
};

export const CountUp = () => {
    const [count, setCount] = React.useState<number>(0);

    React.useEffect(()=> {
        console.log(`count Effect`);
    }, [count]);

    return (
        <View style={styles.container}>
            <View style={styles.texts}>
                <Text style={styles.text1}>tax</Text>
                <Text style={styles.text2}>{count}</Text>
                <Text style={styles.text3}>%</Text>
            </View>
            <Text
                style={styles.box}
                onPress={() => {
                    setCount(count + 1)
                }}>
                Count Up </Text>
            {count % 2 === 0 ? <A/> : <B/>}

        </View>
    );

}
