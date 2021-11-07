import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CreateAccount from "../screens/CreateAccount";
import LogIn from "../screens/LogIn";
import Welcome from "../screens/Welcome";

export type StackParamList = {
  Welcome: undefined;
  LogIn: undefined;
  CreateAccount: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerShadowVisible: false,
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}
