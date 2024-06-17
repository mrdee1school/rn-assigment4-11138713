import { FlatList, Image, Text } from "react-native";
import { View } from "react-native";

const PopularJobs = () => {
  const ongoing = [
    {
      title: "Jr. Executive",
      key: 1,
      image: require("../assets/images/facebook.png"),
      location: "Los Angeles, US",
      salary: "$68,000/y",
      company: "Facebook",
    },
    {
      title: "Product Manager",
      key: 2,
      image: require("../assets/images/bumble.png"),
      location: "Florida, US",
      salary: "$68,000/y",
      company: "Beats",
    },
    {
      title: "Product Manager",
      key: 3,
      image: require("../assets/images/burger.png"),
      location: "Otawa, Canada",
      salary: "$68,000/y",
      company: "Burger King",
    },
    {
      title: "Jr. Developer",
      key: 4,
      image: require("../assets/images/google.png"),
      location: "Missouri, MO",
      salary: "$68,000/y",
      company: "Google",
    },
    {
      title: "Front End Developer",
      key: 5,
      image: require("../assets/images/apple.png"),
      location: "New York, NY",
      salary: "$68,000/y",
      company: "Apple",
    },
    {
      title: "Software Engineer",
      key: 6,
      image: require("../assets/images/facebook.png"),
      location: "Saskatchewan, Canada",
      salary: "$68,000/y",
      company: "Facebook",
    },
    {
      title: "Back End Developer",
      key: 7,
      image: require("../assets/images/facebook.png"),
      location: "London, UK",
      salary: "$68,000/y",
      company: "Facebook",
    },
    {
      title: "Full-Stack Developer",
      key: 8,
      image: require("../assets/images/facebook.png"),
      location: "Paris, France",
      salary: "$68,000/y",
      company: "Facebook",
    },
  ];
  return (
    <View>
      <View className="flex-row items-center justify-between">
        <Text className="text-xl font-semibold pt-8 px-6">Popular Jobs</Text>
        <Text className="text-[#95969D] font-medium pt-8 px-6">See all</Text>
      </View>
      <FlatList
        data={ongoing}
        renderItem={({ item }) => (
          <View>
            <View className="bg-white flex-row items-center py-3 px-3 h-[88px] ml-8 mt-4 rounded-3xl w-[360px]">
              <View className="mr-4">
                <Image source={item.image} className="w-12 h-12" />
              </View>
              <View className="p-2 w-64">
                <View className="flex-row pb-2 space-x-14 justify-between">
                  <Text className="font-[700] text-[#0D0D26]">{item.title}</Text>
                  <Text className="font-[400] text-[#0D0D26]">{item.salary}</Text>
                </View>
                <View className="flex-row space-x-14 justify-between">
                  <Text className="font-[200] text-[#0D0D26]">{item.company}</Text>
                  <Text className="font-[200] text-[#0D0D26]">{item.location}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default PopularJobs;
