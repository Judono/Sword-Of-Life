// const BIBLE_ID = '61fd76eafa1577c2-02'; 
const BIBLE_ID = 'de4e12af7f28f599-02'; 
const API_KEY = 'd99bae01943c2ce0bb79b27374a8c2ca'

export const fetchVerse = async (verseID) => {
  try {
    console.log('this is the api key: ', API_KEY);
    console.log('this is the verseID: ', verseID);
    
    // const response = await fetch(`https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/search?query=${verseID}`, {
    const response = await fetch(`https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/search?query=${verseID}&sort=relevance`, {
    // const response = await fetch(`https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/verses/${verseID}`, {
        method: 'GET',
        headers: {
            'api-key': API_KEY,
        },
    });

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const data = await response.json();
    
    return data; // adjust this if needed based on the API's response structure

  } catch (error) {
    console.error(error);
    return null; // or handle error as you want
  }// adjust this if needed based on the API's response structure
};