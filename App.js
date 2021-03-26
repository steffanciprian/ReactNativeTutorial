import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [goals, setGoals] = useState([]);

    const addGoalHandler = (goalTitle) => {
        setGoals(goals => [...goals, {key: Math.random().toString(), value: goalTitle}]);
    }

    return (
        <View style={styles.screenStyle}>
            <GoalInput onAddGoal={addGoalHandler}/>
            <FlatList data={goals} renderItem=
                {itemData =>
                    <GoalItem
                        onDelete={() => console.log("ia sa vedem")}
                        title={itemData.item.value}
                    />
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
