import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button, Platform} from 'react-native';

export default function App() {
    const [outputText, setOutputText] = useState('Cipii e cel mai tare!')
    return (
        <View style={styles.screenStyle}>
            <View style={styles.inputContainerStyle}
            >
                <TextInput style={styles.textInputStyle}
                />
                <Button title="Add"/>
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
    buttonStyle:{

    }


});
