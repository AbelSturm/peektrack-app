import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AddAscent() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Ascent</Text>
      <Text style={styles.subtitle}>Log your mountain adventure</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});
