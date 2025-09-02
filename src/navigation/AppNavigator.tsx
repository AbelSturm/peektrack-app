import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import AddAscent from '../screens/AddAscent';
import History from '../screens/History';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'AddAscent') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'History') {
              iconName = focused ? 'list' : 'list-outline';
            } else {
              iconName = 'help-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2c3e50',
          tabBarInactiveTintColor: '#7f8c8d',
          headerStyle: {
            backgroundColor: '#2c3e50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{ title: 'PeekTrack' }}
        />
        <Tab.Screen 
          name="AddAscent" 
          component={AddAscent}
          options={{ title: 'Add Ascent' }}
        />
        <Tab.Screen 
          name="History" 
          component={History}
          options={{ title: 'History' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
