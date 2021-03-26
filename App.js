import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [goals, setGoals] = useState([]);

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        setGoals(goals => [...goals, enteredGoal]);
    }

    return (
        <View style={styles.screenStyle}>
            <View style={styles.inputContainerStyle}>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title="Add" onPress={addGoalHandler}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screenStyle: {
        padding: 50
    },
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


});
