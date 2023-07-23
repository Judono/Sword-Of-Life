import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { MoodList } from '../../../data/moods'
import styles from './styles'

const Moods = () => {
  const navigation = useNavigation()
  const moods = MoodList
  const insets = useSafeAreaInsets();

  return (
      <ScrollView contentContainerStyle={[styles.container, {paddingBottom: insets.bottom}]}>
        {moods.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.moodButton, {backgroundColor: item.color}]} 
            onPress={() => navigation.navigate('verseScreen', { mood: item.mood })}>
            <Text style={styles.moodText}>{item.mood}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
  )
}

export default Moods