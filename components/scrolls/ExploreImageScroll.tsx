import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const ExploreImageScroll = (props: Props) => {
  const [liked, setLiked] = useState(false);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      alwaysBounceHorizontal={true}
    >
      <View className="flex-row gap-2">
        <View className="rounded-3xl inset-shadow-xl">
          <Image
            source={require("../../assets/images/places/anuradapura.jpg")}
            className="w-56 h-[300px] rounded-3xl"
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
              size={24}
            />
          </TouchableOpacity>
          <TouchableOpacity className="absolute bottom-4 left-4 bg-gray-800 opacity-80 rounded-2xl p-4 w-full">
            <View className="relative items-start">
              <View className="flex-row items-center mb-2">
                <Text className={`text-slate-200 text-lg font-bold`}>
                  Ruwanweliseya,
                </Text>
                <Text className="text-slate-200 text-base">Sri Lanka</Text>
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
            className="w-56 h-[300px] rounded-3xl"
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
                <Text className="text-slate-200 text-base">Sri Lanka</Text>
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
            className="w-56 h-[300px] rounded-3xl"
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
                <Text className="text-slate-200 text-base">Sri Lanka</Text>
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
            className="w-56 h-[300px] rounded-3xl"
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
                <Text className="text-slate-200 text-base">Sri Lanka</Text>
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
  );
};

export default ExploreImageScroll;
