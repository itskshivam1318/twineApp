import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
// import analytics from '@react-native-firebase/analytics';
import uuid from "react-native-uuid";
import { firebase } from "../firebase/config";
import * as Analytics from "expo-firebase-analytics";

export default function ProfileCreated() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [bio, setBio] = useState("");

  //   const profileEvent =() => {
  //     clearField()
  //     // analytics().setUserId('1')
  // //     analytics().setUserProperties({
  // //       ["username"]: name,
  // //       ["mail"]:mail,
  // //   })
  //   }

  const userProfileCreatedEvent = () => {
    Analytics.logEvent('NewUserCreated', {
      contentType: 'text', 
      itemId: 'New User', 
      item: `new user ${name} created`
    })
  }

  const clearField = () => {
    setName("");
    setMail("");
    setBio("");
    console.log(uuid.v1());
  };

  const addUser = () => {
    firebase
      .database()
      .ref("users/" + uuid.v1())
      .set({
        userName: name,
        userMail: mail,
        userBio: bio,
      });
  };

  const onProfileCreated = () => {
    addUser();
    clearField();
    userProfileCreatedEvent();
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, margin: 20 }}>Create Profile</Text>
      <Text style={{ fontSize: 20, marginLeft: 20, padding: 5 }}>Name</Text>
      <TextInput
        style={styles.text}
        onChangeText={(name) => setName(name)}
        placeholder=" Name "
        value={name}
      />
      <Text style={{ fontSize: 20, marginLeft: 20, padding: 5 }}>Mail</Text>
      <TextInput
        style={styles.text}
        onChangeText={(mail) => setMail(mail)}
        placeholder=" Mail"
        keyboardType="email-address"
        value={mail}
      />
      <Text style={{ fontSize: 20, marginLeft: 20, padding: 5 }}>Bio</Text>
      <TextInput
        style={styles.text}
        onChangeText={(bio) => setBio(bio)}
        placeholder=" Bio"
        value={bio}
      />
      <View style={{ width: 350, flex: 1, alignItems: "center" }}>
        <Button title="Create" onPress={() => onProfileCreated()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text: {
    borderBottomColor: "gray",
    height: 40,
    width: 300,
    borderWidth: 2,
    padding: 2,
    marginLeft: 30,
  },
});
