import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './stack'

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )
}

export default RootNavigator