import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const GoalItem = props => {

    return <View
        style={styles.textStyleGiveToWrappingView}>
        <Text>{props.title}</Text>
    </View>
};
const styles = StyleSheet.create({
    textStyleGiveToWrappingView: {
        padding: 10,
        marginVertical: 1,
        backgroundColor: "grey",
        borderColor: "black",
        borderWidth: .5,

    }
})

export default GoalItem;