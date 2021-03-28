import React, {useState} from 'react';
import {Button, Modal, StyleSheet, TextInput, View} from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    const cancelGoalHandler = () => {
        props.cancel();
        setEnteredGoal('');

    }

    return (
        <Modal visible={props.visible} animationType={"slide"}>
            <View style={styles.inputContainerStyle}>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonStyle}>
                    <View style={styles.buttonWidth}>
                        <Button title="Cancel" onPress={cancelGoalHandler} color='red'/>
                    </View>
                    <View style={styles.buttonWidth}>
                        <Button title="Add" onPress={addGoalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
};
const styles = StyleSheet.create({
    inputContainerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textInputStyle: {
        width: "80%",
        borderBottomWidth: 1,
        borderColor: "black",
        padding: 10,
        textAlign: "center",
        marginBottom: 5,
    },
    buttonStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: "60%"
    },
    buttonWidth: {
        width: '40%'
    }
})
export default GoalInput;
