import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EMAIL, USERNAME } from "../components/LoginScreen";
import SearchArea from "../components/SearchArea";
import FeaturedJobs from "../components/FeaturedJobs";
import PopularJobs from "../components/PopularJobs";

const Home2 = () => {
  return (
    <SafeAreaView className="bg-[#FAFAFD] h-full">
      <View className="flex-row justify-between p-5">
        <View>
          <Text className="font-[700] text-[28px] text-[#0D0D26]">{USERNAME}</Text>
          <Text className="font-[400] text-[23px] text-[#95969D]">{EMAIL}</Text>
        </View>
        <View>
          <View className="absolute z-50 left-[48px] top-1 bg-[#FAFAFD] p-1.5 rounded-full">
            <View className="bg-[#FC1010] p-[4.5px] rounded-full" />
          </View>

          <Image
            source={require("@/assets/images/Ellipse.png")}
            className="h-[68px] w-[68px]"
            resizeMode="contain"
          />
        </View>
      </View>

      <SearchArea />
      <FeaturedJobs />
      <PopularJobs />
    </SafeAreaView>
  );
};

export default Home2;
