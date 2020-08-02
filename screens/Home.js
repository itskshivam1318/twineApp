import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.button}>
        <Button title="Create Profile" 
        onPress={()=>{
            return(
                navigation.navigate("CreateProfile")
            )
        }} />
      </View>

      <View style={styles.button}>
        <Button title="Share App" 
        onPress={()=>{
            return(
                navigation.navigate("ShareApp")
            )
        }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignContent: "center"
  },
  button: {
    margin: 10
  }
});
