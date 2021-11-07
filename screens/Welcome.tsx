import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import { StackParamList } from "../navigators/LoggedOutNav";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 0px 40px;
`;

const Logo = styled.Image`
  max-width: 50%;
  height: 100px;
`;

const CreateAccount = styled.TouchableOpacity`
  background-color: ${colors.blue};
  width: 100%;
  padding: 10px;
  border-radius: 3px;
`;

const CreateAccountText = styled.Text`
  text-align: center;
  color: white;
  font-weight: 600;
`;

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
    <Container>
      <Logo source={require("../assets/logo.png")} resizeMode="contain" />
      <CreateAccount onPress={goToCreateAccount}>
        <CreateAccountText>Create New Account</CreateAccountText>
      </CreateAccount>
      <TouchableOpacity onPress={goToLogIn}>
        <LoginLink>Log in</LoginLink>
      </TouchableOpacity>
    </Container>
  );
}
