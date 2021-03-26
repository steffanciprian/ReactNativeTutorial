import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [goals, setGoals] = useState([]);

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        setGoals(goals => [...goals, {key: Math.random().toString(), value: enteredGoal}]);
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

            <FlatList data={goals} renderItem=
                {itemData =>
                    <View
                        style={styles.textStyleGiveToWrappingView}>
                        <Text>{itemData.item.value}</Text>
                    </View>
                }>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    screenStyle: {
        padding: 30
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
    textStyleGiveToWrappingView: {
        padding: 10,
        marginVertical: 1,
        backgroundColor: "grey",
        borderColor: "black",
        borderWidth: .5,

    }

});
