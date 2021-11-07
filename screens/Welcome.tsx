import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { StackParamList } from "../navigators/LoggedOutNav";

const LoginLink = styled.Text`
  color: ${colors.blue};
  margin: 20px 0px 0px 0px;
  font-weight: 600;
`;

export default function Welcome({
  navigation,
}: NativeStackScreenProps<StackParamList, "Welcome">) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogIn = () => navigation.navigate("LogIn");

  return (
    <AuthLayout>
      <AuthButton
        text={"Create New Account"}
        onPress={goToCreateAccount}
        disabled={false}
      />
      <TouchableOpacity onPress={goToLogIn}>
        <LoginLink>Log In</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
}
