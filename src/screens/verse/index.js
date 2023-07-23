import { View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HTML from 'react-native-render-html';
import styles from './styles';
import { fetchVerse } from '../../api/bibleApi';
import { VERSES } from '../../../data/verses';

const Verse = () => {
  const dailyVerse = VERSES
  const [verse, setVerse] = useState(null);
  const [verseID, setVerseID] = useState('1');
  const [loading, setLoading] = useState(true);

  const contentWidth = useWindowDimensions().width - 20;  // calculate contentWidth here

  const fetchRandomVerse = async () => {
    console.log('fetching verse');
    setLoading(true); // start loading
  
    // Select a random verse
    const randomVerseId = dailyVerse[Math.floor(Math.random() * dailyVerse.length)];
  
    await fetchVerse(randomVerseId).then(data => {
      // console.log(data.data.content);
      console.log(data.data.passages[0].reference);
      
      // extract data-sid attribute value using regex
      const dataSidMatch = data.data.passages[0].content.match(/data-sid="(.*?)"/);
      const dataSid = dataSidMatch ? dataSidMatch[1] : '';
      
      setVerse({content: data.data.passages[0], dataSid: dataSid});  // set verse as an object with content and dataSid fields
      setLoading(false); // stop loading
    }).catch(error => {
      console.error('Error getting verse:', error);
      setLoading(false); // stop loading even if there was an error
    });
  };

  useEffect(() => {
    fetchRandomVerse();
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        {
          loading ? 
          <ActivityIndicator size="large" color="#0000ff" /> : 
          <>
            <HTML source={{ html: verse.content.content }} contentWidth={contentWidth} />
            <Text>{verse.content.reference}</Text>
          </>
        }
      </View>

      <TouchableOpacity onPress={async () => await fetchRandomVerse()} style={styles.shuffleIcon}>
          <MaterialCommunityIcons name="shuffle" size={50} color="black"/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Verse