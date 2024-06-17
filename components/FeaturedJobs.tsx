import { FlatList, Image, Text, View } from "react-native";

const FeaturedJobs = () => {
  const featuredJobs = [
    {
      title: "Software Engineer",
      key: 1,
      company: "Facebook",
      salary: "$180,000",
      location: "Accra, Ghana",
      image: require("@/assets/images/facebook.png"),
      background: "bg-[#356899]",
    },
    {
      title: "Analyst",
      key: 2,
      company: "Beats",
      salary: "$180,000",
      location: "Accra, Ghana",
      image: require("@/assets/images/bumble.png"),
      background: "bg-[#1B3C5C]",
    },
    {
      title: "Back End Developer",
      key: 3,
      company: "Google",
      salary: "$180,000",
      location: "Accra, Ghana",
      image: require("@/assets/images/google.png"),
      background: "bg-[#082037]",
    },
    {
      title: "Software Engineer",
      key: 4,
      company: "Burger King",
      salary: "$180,000",
      location: "Accra, Ghana",
      image: require("@/assets/images/burger.png"),
      background: "bg-[#4F6173]",
    },
    {
      title: "Software Engineer",
      key: 5,
      company: "Apple",
      salary: "$180,000",
      location: "Accra, Ghana",
      image: require("@/assets/images/apple.png"),
      background: "bg-[#047BF1]",
    },
    {
      title: "Software Engineer",
      key: 6,
      company: "Facebook",
      salary: "$180,000",
      location: "Accra, Ghana",
      image: require("@/assets/images/facebook.png"),
      background: "bg-[#356899]",
    },
    {
      title: "Software Engineer",
      key: 7,
      company: "Facebook",
      salary: "$180,000",
      location: "Accra, Ghana",
      image: require("@/assets/images/facebook.png"),
      background: "bg-[#356899]",
    },
    {
      title: "Software Engineer",
      key: 8,
      company: "Facebook",
      salary: "$180,000",
      location: "Accra, Ghana",
      image: require("@/assets/images/facebook.png"),
      background: "bg-[#356899]",
    },
  ];
  return (
    <View className="pt-5">
      <View className="flex-row items-center justify-between">
        <Text className="text-xl font-semibold pt-8 px-6">Featured Jobs</Text>
        <Text className="text-[#95969D] font-medium pt-8 px-6">See all</Text>
      </View>
      <FlatList
        data={featuredJobs}
        renderItem={({ item }) => (
          <View className="pt-3 pl-7">
            <View
              className={`${item.background} p-6 mt-3 mb-4 h-52 rounded-3xl w-80`}
            >
              <View className="flex-row">
                <View className="bg-white h-[53px] w-[52px] p-2 rounded-2xl">
                  <Image
                    source={item.image}
                    className="w-8 h-8"
                    resizeMode="contain"
                  />
                </View>
                <View className="pl-4">
                  <Text className="font-bold text-lg text-white">
                    {item.title}
                  </Text>
                  <Text className="text-base font-light text-white opacity-80">
                    {item.company}
                  </Text>
                </View>
              </View>

              <View className="mt-20 flex-row justify-between">
                <Text className="text-white text-base font-medium">{item.salary}</Text>
                <Text className="text-white text-base font-medium">{item.location}</Text>
              </View>
            </View>
          </View>
        )}
        horizontal
      />
    </View>
  );
};

export default FeaturedJobs;
