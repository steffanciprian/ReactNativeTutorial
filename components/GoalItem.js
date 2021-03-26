import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const GoalItem = props => {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onDelete.bind(this, props.id)}>
            <View
                style={styles.textStyleGiveToWrappingView}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
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
