import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Constants from 'expo-constants';

export default function App() {

  function fab(n) {
    if(n <= 1){
        return n;
    }
    return fab(n - 1) + fab(n-2);;
  }
  return (
    <View style={styles.container}>
    <Text style={styles.text}>31 число Фибоначчи:</Text>
      <Text style={styles.text}>{fab(31)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: "center",
  },
  text: {
    fontWeight: 'bold',
    fontSize: 31,
  },
});
