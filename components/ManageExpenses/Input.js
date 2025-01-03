import React from "react";
import { Text, TextInput, View } from "react-native";

const Input = ({ label, textInputConfig }) => {
  return (
    <View>
      <Text>Label</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
};

export default Input;
