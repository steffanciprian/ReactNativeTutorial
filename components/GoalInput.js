import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return <View style={styles.inputContainerStyle}>
        <TextInput
            style={styles.textInputStyle}
            onChangeText={goalInputHandler}
            value={enteredGoal}
        />
        <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)}/>
    </View>
};
const styles = StyleSheet.create({
    inputContainerStyle: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    },
    textInputStyle: {
        width: "80%",
        borderBottomWidth: 1,
        borderColor: "black",
        padding: 10,
        textAlign: "center",
    },
})
export default GoalInput;