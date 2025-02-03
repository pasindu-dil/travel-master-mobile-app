import LabelButton from "@/components/buttons/LabelButton";
import useThemeStyles from "@/hooks/useThemeStyles";
import { Ionicons } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  RefreshControl,
} from "react-native";

const ExploreScreen = () => {
  const { text, background } = useThemeStyles();
  const [liked, setLiked] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View className="flex-1 justify-start mx-4 mt-12">
        <View className="flex flex-row justify-between">
          <Text className={`${text}`}>Explore</Text>
          <View>
            <Text className={`${text}`}>Explore</Text>
          </View>
        </View>
        <View className="my-2">
          <TextInput
            placeholder="Search"
            className={`${text} p-5 pl-11 text-start bg-slate-50 dark:bg-slate-800 border-slate-400 dark:border-white border-2 rounded-full`}
          />
          <Ionicons
            name="search"
            size={24}
            color="#9b8181"
            className="absolute top-4 pl-3"
          />
        </View>
        <View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View className="mt-4 flex-row justify-between gap-2">
              <LabelButton name="Location" handleClick={() => {}} />
              <LabelButton name="Hotels" handleClick={() => {}} />
              <LabelButton name="Food" handleClick={() => {}} />
              <LabelButton name="Adventure" handleClick={() => {}} />
              <LabelButton name="Adventure" handleClick={() => {}} />
            </View>
          </ScrollView>
        </View>
        <View className="mt-4">
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            alwaysBounceHorizontal={true}
          >
            <View className="flex-row gap-4">
              <View className="rounded-3xl inset-shadow-xl">
                <Image
                  source={require("../../assets/images/places/anuradapura.jpg")}
                  className="w-80 h-[400px] rounded-3xl"
                />
                <TouchableOpacity
                  className={`absolute top-4 right-4 rounded-full p-2 ${
                    liked ? `bg-slate-200` : `bg-gray-600`
                  } `}
                  onPress={() => setLiked(!liked)}
                >
                  <Ionicons
                    name={liked ? "heart" : "heart-outline"}
                    color={liked ? "green" : "white"}
                    size={28}
                  />
                </TouchableOpacity>
                <TouchableOpacity className="absolute bottom-4 left-4 bg-gray-800 opacity-80 rounded-2xl p-4">
                  <View className="relative items-start">
                    <View className="flex-row items-center mb-2">
                      <Text className={`text-slate-200 text-lg font-bold`}>
                        Ruwanweliseya,
                      </Text>
                      <Text className="text-slate-200 text-base">
                        Sri Lanka
                      </Text>
                    </View>
                    <View className="flex-row items-center -ml-1">
                      <Ionicons name="location" size={24} color={"white"} />
                      <Text className="text-slate-200 text-sm">
                        Anuradhapura, Sri Lanka
                      </Text>
                      <View className="p-2 bg-slate-900 rounded-full ml-4">
                        <Text className="text-slate-200">4.8</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="rounded-3xl inset-shadow-xl">
                <Image
                  source={require("../../assets/images/places/images.jpeg")}
                  className="w-80 h-[400px] rounded-3xl"
                />
                <TouchableOpacity
                  className={`absolute top-4 right-4 rounded-full p-2 ${
                    liked ? `bg-slate-200` : `bg-gray-600`
                  } `}
                  onPress={() => setLiked(!liked)}
                >
                  <Ionicons
                    name={liked ? "heart" : "heart-outline"}
                    color={liked ? "green" : "white"}
                    size={28}
                  />
                </TouchableOpacity>
                <TouchableOpacity className="absolute bottom-4 left-4 bg-gray-800 opacity-80 rounded-2xl p-4">
                  <View className="relative items-start">
                    <View className="flex-row items-center mb-2">
                      <Text className={`text-slate-200 text-lg font-bold`}>
                        Ruwanweliseya,
                      </Text>
                      <Text className="text-slate-200 text-base">
                        Sri Lanka
                      </Text>
                    </View>
                    <View className="flex-row items-center -ml-1">
                      <Ionicons name="location" size={24} color={"white"} />
                      <Text className="text-slate-200 text-sm">
                        Anuradhapura, Sri Lanka
                      </Text>
                      <View className="p-2 bg-slate-900 rounded-full ml-4">
                        <Text className="text-slate-200">4.8</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="rounded-3xl inset-shadow-xl">
                <Image
                  source={require("../../assets/images/places/test.webp")}
                  className="w-80 h-[400px] rounded-3xl"
                />
                <TouchableOpacity
                  className={`absolute top-4 right-4 rounded-full p-2 ${
                    liked ? `bg-slate-200` : `bg-gray-600`
                  } `}
                  onPress={() => setLiked(!liked)}
                >
                  <Ionicons
                    name={liked ? "heart" : "heart-outline"}
                    color={liked ? "green" : "white"}
                    size={28}
                  />
                </TouchableOpacity>
                <TouchableOpacity className="absolute bottom-4 left-4 bg-gray-800 opacity-80 rounded-2xl p-4">
                  <View className="relative items-start">
                    <View className="flex-row items-center mb-2">
                      <Text className={`text-slate-200 text-lg font-bold`}>
                        Ruwanweliseya,
                      </Text>
                      <Text className="text-slate-200 text-base">
                        Sri Lanka
                      </Text>
                    </View>
                    <View className="flex-row items-center -ml-1">
                      <Ionicons name="location" size={24} color={"white"} />
                      <Text className="text-slate-200 text-sm">
                        Anuradhapura, Sri Lanka
                      </Text>
                      <View className="p-2 bg-slate-900 rounded-full ml-4">
                        <Text className="text-slate-200">4.8</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="rounded-3xl inset-shadow-xl">
                <Image
                  source={require("../../assets/images/places/images (1).jpeg")}
                  className="w-80 h-[400px] rounded-3xl"
                />
                <TouchableOpacity
                  className={`absolute top-4 right-4 rounded-full p-2 ${
                    liked ? `bg-slate-200` : `bg-gray-600`
                  } `}
                  onPress={() => setLiked(!liked)}
                >
                  <Ionicons
                    name={liked ? "heart" : "heart-outline"}
                    color={liked ? "green" : "white"}
                    size={28}
                  />
                </TouchableOpacity>
                <TouchableOpacity className="absolute bottom-4 left-4 bg-gray-800 opacity-80 rounded-2xl p-4">
                  <View className="relative items-start">
                    <View className="flex-row items-center mb-2">
                      <Text className={`text-slate-200 text-lg font-bold`}>
                        Ruwanweliseya,
                      </Text>
                      <Text className="text-slate-200 text-base">
                        Sri Lanka
                      </Text>
                    </View>
                    <View className="flex-row items-center -ml-1">
                      <Ionicons name="location" size={24} color={"white"} />
                      <Text className="text-slate-200 text-sm">
                        Anuradhapura, Sri Lanka
                      </Text>
                      <View className="p-2 bg-slate-900 rounded-full ml-4">
                        <Text className="text-slate-200">4.8</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        <View className="w-full h-full">
            <View>
              <Text>Test</Text>
              <Image
                  source={require("../../assets/images/places/images (1).jpeg")}
                  className="w-full h-full rounded-3xl"
                />
            </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExploreScreen;
