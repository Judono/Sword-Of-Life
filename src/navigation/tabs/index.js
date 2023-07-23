import { View, Text, SafeAreaView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react'
import MoodStack from '../stack/moodStack';
import Home from '../../screens/home';

const MainTab = () => {
  const Tab = createMaterialTopTabNavigator()
  const insets = useSafeAreaInsets();
  return (
    <View style={{flex: 1, backgroundColor: '#10C0D0'}}>
      <Tab.Navigator
        initialRouteName="verse"
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarActiveTintColor: 'white',
          tabBarStyle:{
            backgroundColor: '#10C0D0'
          },
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: '800',
          },
          tabBarIndicatorStyle: {
            backgroundColor:'#10C0D0',
          }
        }}
        style={{paddingTop: insets.top}}>
        <Tab.Screen name="verse" component={Home} />
        <Tab.Screen name="mood" component={MoodStack} />
      </Tab.Navigator>
    </View>
  )
}

export default MainTab