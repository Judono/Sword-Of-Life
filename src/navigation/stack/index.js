import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from '../tabs';

const Stack = createStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={MainTab} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default AppStack