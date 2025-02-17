import { useNavigation } from "expo-router";
import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, Image, StyleSheet } from "react-native";

const logo = require("../assets/images/logo.png");

export default function Index() {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    navigation.setOptions({ title: "Lumos", headerTitleAlign: "center" }); // Change the title here
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.heading}>Lumos App</Text>

      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={inputValue}
        onChangeText={setInputValue}
      />

      <View style={styles.buttonContainer}>
        <Button color={"black"} title="Press Me" onPress={() => alert("Thank you for clicking")} />
      </View>

      <Text style={styles.inputText}>You typed: {inputValue}</Text>
    </View>
  );
}

// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 100,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  inputText: {
    marginTop: 10,
    fontSize: 16,
  },
  buttonContainer: {
    
    width: "80%",
    marginTop: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
});
