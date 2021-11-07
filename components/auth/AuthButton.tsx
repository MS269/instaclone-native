import React from "react";
import styled from "styled-components/native";
import { colors } from "../../colors";

interface AuthButtonProps {
  onPress: () => void;
  disabled: boolean;
  text: string;
}

const Button = styled.TouchableOpacity`
  background-color: ${colors.blue};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  width: 100%;
  padding: 13px 10px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  text-align: center;
  color: white;
  font-weight: 600;
`;

export default function AuthButton({
  onPress,
  disabled,
  text,
}: AuthButtonProps) {
  return (
    <Button onPress={onPress} disabled={disabled}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
