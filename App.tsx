import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import LoggedOutNav from "./navigators/LoggedOutNav";

export default function App() {
  const [loading, setLoading] = useState(true);

  const preload = async () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));
    const imagesToLoad = [require("./assets/white-logo.png")];
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
    <NavigationContainer>
      <LoggedOutNav />
    </NavigationContainer>
  );
}
