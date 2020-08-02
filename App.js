import React, { useEffect } from 'react';
import { Platform, StyleSheet,StatusBar, Text, View, Button } from 'react-native';
// import firebase from '@react-native-firebase/app';
// import analytics from '@react-native-firebase/analytics';
import Navigator from './homeStack'
import * as Analytics from 'expo-firebase-analytics'; 


// TODO(you): import any additional firebase services that you require for your app, e.g for auth:
//    1) install the npm package: `yarn add @react-native-firebase/auth@alpha` - you do not need to
//       run linking commands - this happens automatically at build time now
//    2) rebuild your app via `yarn run run:android` or `yarn run run:ios`
//    3) import the package here in your JavaScript code: `import '@react-native-firebase/auth';`
//    4) The Firebase Auth service is now available to use here: `firebase.auth().currentUser`

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
// });

// const firebaseCredentials = Platform.select({
//   ios: 'https://invertase.link/firebase-ios',
//   android: 'https://invertase.link/firebase-android',
// });



export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Navigator />
      <Button
      title="Login"
      onPress={() =>
        Analytics.logEvent('UserLoggedIn', {
          contentType: 'text', 
          itemId: 'Log In', 
          item: "User Logged In "
        })
      }
        />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'red',

//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
