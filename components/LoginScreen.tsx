import { View, Text, StyleSheet, Image, Alert } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import InputForm from "./InputForm";
import Button from "./Button";

export const USERNAME = "Fred McDougal";
export const EMAIL = "fred@example.com";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const submit = () => {
    if (username != USERNAME && email != EMAIL) {
      Alert.alert("Please enter the correct username and email");
    }

    setUsername(USERNAME);
    setEmail(EMAIL);

    router.replace("/home2");
  };

  return (
    <View className="pt-12">
      <View className="p-5">
        <Text className="text-2xl font-semibold text-[#356899]">Jobizz</Text>
      </View>

      <View className="px-5 pb-14">
        <View className="pb-4">
          <Text className="text-3xl font-semibold">Welcome Back</Text>
        </View>

        <View>
          <Text className="text-base text-[#AFB0B6]">
            Let's login. Apply for jobs!
          </Text>
        </View>
      </View>

      <View className="px-5 pt-2">
        <View className="pb-5">
          <InputForm placeholder="Name" />
        </View>
        <View>
          <InputForm placeholder="Email" />
        </View>
        <View className="pt-14">
          <Button handlePress={submit} title="Log in" />
        </View>
      </View>

      <View className="flex-row items-center justify-center pt-20">
        <View className="border-[0.5px] w-[110px] border-[#AFB0B6]" />
        <View className="px-5">
          <Text className="text-[#AFB0B6]">Or continue with</Text>
        </View>
        <View className="border-[0.5px] w-[110px] border-[#AFB0B6]" />
      </View>

      <View className="flex-row items-center justify-evenly pt-10">
        <View className="bg-white p-4 rounded-full">
          <Image source={require("../assets/images/apple.png")} />
        </View>
        <View className="bg-white p-4 rounded-full">
          <Image source={require("../assets/images/google.png")} />
        </View>
        <View className="bg-white p-4 rounded-full">
          <Image source={require("../assets/images/facebook.png")} />
        </View>
      </View>

      <View className="flex-row items-center justify-center pt-12">
        <Text className="text-[#AFB0B6] pr-1">Don't have an account?</Text>
        <Text className="text-[#356899]">Register</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
