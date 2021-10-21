import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [loading, setLoading] = useState(true);
  const preload = async () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));
    const imagesToLoad = [require("./assets/logo.png")];
    const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));
    await Promise.all([fontPromises, imagePromises]);
  };
  const onError = (error: Error) => console.warn(error);
  const onFinish = () => setLoading(false);
  if (loading) {
    return (
      <AppLoading startAsync={preload} onError={onError} onFinish={onFinish} />
    );
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
