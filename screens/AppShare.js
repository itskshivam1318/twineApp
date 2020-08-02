import React from "react";
import { Share, Text, View,Button } from "react-native";
import * as Analytics from 'expo-firebase-analytics'; 


const shareOptions = {
  title: 'App',
  message: 'hey! Download the Amazing App "https://play.google.com/apps/testing/com.twinein.betapp"', // Note that according to the documentation at least one of "message" or "url" fields is required
  url: "https://play.google.com/apps/testing/com.twinein.betapp",
  subject: 'Download the App'
};

const onSharePress =() => {
  Share.share(shareOptions)
}

const logShareEvent = () => {
  Analytics.logEvent('share', {
    contentType: 'text', 
    itemId: 'Share',
    item:"twine rocks" 
  })
}
const shareAndLog = () =>{
  onSharePress();
  logShareEvent();
}


export default function AppShare() {
  return (
    <View>
      <Text> App Share </Text>
      <Button
      title="Share" 
      onPress={()=>shareAndLog()}/>
    </View>
  );
}

