import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder="Your task..." />
        <Button title="Add Task" />
      </View>
      <View>
        <Text>List of tasks...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
});
