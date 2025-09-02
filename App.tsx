import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { initDb } from './src/services/db';

export default function App() {
  useEffect(() => {
    // Initialize the database when the app starts
    try {
      initDb();
    } catch (error) {
      console.error('Failed to initialize database:', error);
    }
  }, []);

  return (
    <>
      <AppNavigator />
      <StatusBar style="light" />
    </>
  );
}
