import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [goals, setGoals] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);


    const addGoalHandler = (goalTitle) => {
        setGoals(goals => [...goals, {id: Math.random().toString(), value: goalTitle}]);

    }

    const deleteGoalHandler = goalId => {
        console.log(goalId);
        setGoals(goals => {
            return goals.filter(goal => goal.id !== goalId);
        })
    }

    return (
        <View style={styles.screenStyle}>
            <Button title="Add New Goal" onPress={() => setIsShowModal(true)}/>
            <GoalInput visible={isShowModal} onAddGoal={addGoalHandler}/>
            <FlatList
                data={goals}
                renderItem={itemData => <GoalItem
                    id={itemData.item.id}
                    onDelete={deleteGoalHandler}
                    title={itemData.item.value}/>
                }>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    screenStyle: {
        padding: 30
    },
});
