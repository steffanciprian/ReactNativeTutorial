import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, TextInput, View , Button, Platform} from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Cipii e cel mai tare!')
  return (
      <View style={
          {padding : 50}
      }>
          <View style={
              {
              flexDirection: "row",
              justifyContent: 'space-between',
              alignItems: "center"
              }}
          >
              <TextInput
                  placeholder="Input"
                  style={{
                      width:"80%",
                      borderBottomWidth: 1,
                      borderColor: "black",
                      padding: 10,
                      textAlign:"center",
                  }}
              />
              <Button title="Add"/>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
      ...Platform.select({
          ios: {
              backgroundColor:"pink"
          },
          android:{
              backgroundColor: "pink"
          },
          default:{
              backgroundColor:"blue"
          }
      })
  }
});
