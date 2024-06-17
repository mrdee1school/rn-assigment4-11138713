import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";

const InputForm = ({ placeholder }: any) => {
  return (
    <View className={`space-y-2`}>
      <View className="h-[60px] px-4 border border-[#AFB0B6] rounded-xl items-center flex-row">
        <TextInput
          className="flex-1 text-black text-base"
          placeholder={placeholder}
          placeholderTextColor="#AFB0B6"
        />
      </View>
    </View>
  );
};

export default InputForm;
