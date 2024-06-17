import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

const SearchArea = () => {
  return (
    <View className="flex-row pt-10">
        {/* Search box */}
        <View className="bg-[#F2F2F3] px-6 py-3 text-base w-80 h-14 ml-4 mr-5 rounded-2xl flex-row items-center">
          <Image
            source={require("@/assets/images/search.png")}
            className="w-5 h-5"
            resizeMode="contain"
            tintColor="#161622"
          />
          <TextInput
            className="text-[20px] font-[400] ml-2"
            placeholder="Search a job or position"
            placeholderTextColor="#95969D"
          />
        </View>
        {/* Search box */}

        {/* Filter */}
        <View className="p-4 rounded-2xl bg-[#F2F2F3]">
          <Image
            source={require("@/assets/images/filter.png")}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </View>
        {/* Filter */}
      </View>
  )
}

export default SearchArea