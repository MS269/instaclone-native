import React from "react";
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

const AuthInput = styled.TextInput`
  background-color: "white";
  width: 100%;
`;

export default function CreateAccount() {
  return (
    <AuthLayout>
      <AuthInput
        placeholder="First Name"
        placeholderTextColor="gray"
        returnKeyType="next"
      />
      <AuthInput
        placeholder="Last Name"
        placeholderTextColor="gray"
        returnKeyType="next"
      />
      <AuthInput
        placeholder="Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        returnKeyType="next"
      />
      <AuthInput
        placeholder="Username"
        placeholderTextColor="gray"
        returnKeyType="next"
      />
      <AuthInput
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        returnKeyType="done"
      />
      <AuthButton text="Create Account" onPress={() => null} disabled={true} />
    </AuthLayout>
  );
}
