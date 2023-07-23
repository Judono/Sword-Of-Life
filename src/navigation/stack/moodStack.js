import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Moods from '../../screens/moods';
import Verse from '../../screens/verse';

const Stack = createStackNavigator()

const MoodStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="mood" component={Moods} options={{headerShown: false}} />
      <Stack.Screen name="verseScreen" component={Verse} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default MoodStack