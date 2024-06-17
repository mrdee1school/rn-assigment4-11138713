import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
}: any) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-[#356899] rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
    >
      <Text className={`text-white font-semibold text-lg ${textStyles} `}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
