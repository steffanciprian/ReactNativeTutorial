import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [goals, setGoals] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const modalAppear = () => {
        setShowModal(true);
    }

    const addGoalHandler = goal => {
        if (goal !== '') {
            setGoals(goals => [...goals, {id: Math.random().toString(), value: goal}]);
            setShowModal(false)
        } else {
            alert("Please set a goal");
        }
    }

    const cancelGoalHandler = () => {
        setShowModal(false);
    }

    const deleteGoalHandler = goalId => {
        setGoals(goals => goals.filter(goal => goal.id !== goalId))
    }

    return (
        <View style={styles.screenStyle}>
            <Button title="Add New Goal" onPress={modalAppear}/>
            <GoalInput isModalVisible={showModal} addGoal={addGoalHandler} cancelGoal={cancelGoalHandler}/>
            <FlatList
                data={goals}
                renderItem={itemData =>
                    <GoalItem id={itemData.item.id} deleteGoal={deleteGoalHandler} title={itemData.item.value}/>
                }>
            </FlatList>
        </View>
    );
}
const styles = StyleSheet.create({
    screenStyle: {
        padding: 30,
    },
});
