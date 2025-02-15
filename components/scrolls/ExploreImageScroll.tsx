import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Place from "../Place";
import { router, useNavigation } from "expo-router";

type Props = {};

const data = [
  {
    id: 1,
    title: "Ruwanweliseya",
    country: "Sri Lanka",
    location: "Anuradhapura, Sri Lanka",
    rating: 4.8,
    imageUrl: require("../../assets/images/places/anuradapura.jpg"),
    description:
      "Ruwanweliseya is a stupa in Sri Lanka, considered a marvel for its architectural qualities and sacred to many Buddhists all over the world.",
  },
  {
    id: 2,
    title: "Great Wall",
    country: "China",
    location: "Beijing, China",
    rating: 4.9,
    imageUrl: require("../../assets/images/places/china_wall_ssk500.jpeg"),
    description:
      "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe.",
  },
  {
    id: 3,
    title: "Bora Bora",
    country: "French Polynesia",
    location: "South Pacific Ocean",
    rating: 4.7,
    imageUrl: require("../../assets/images/places/bora-bora-gettyimages-575766591.avif"),
    description:
      "Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed motus (islets) and a turquoise lagoon protected by a coral reef, it’s known for its scuba diving.",
  },
  {
    id: 4,
    title: "London Eye",
    country: "England",
    location: "London, UK",
    rating: 4.6,
    imageUrl: require("../../assets/images/places/top-places-to-visit-in-the-world-london-england.jpg"),
    description:
      "The London Eye, or the Millennium Wheel, is a cantilevered observation wheel on the South Bank of the River Thames in London. It is Europe's tallest cantilevered observation wheel, and is the most popular paid tourist attraction in the United Kingdom with over 3 million visitors annually.",
  },
  {
    id: 5,
    title: "London Eye",
    country: "England",
    location: "London, UK",
    rating: 4.6,
    imageUrl: require("../../assets/images/places/top-places-to-visit-in-the-world-london-england.jpg"),
    description:
      "The London Eye, or the Millennium Wheel, is a cantilevered observation wheel on the South Bank of the River Thames in London. It is Europe's tallest cantilevered observation wheel, and is the most popular paid tourist attraction in the United Kingdom with over 3 million visitors annually.",
  },
];

const ExploreImageScroll = (props: Props) => {
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();

  const handlePress = (item) => {
    console.log("Pressed");
    router.navigate("place", {
      id: item.id,
      imageUrl: item.imageUrl,
      title: item.title,
      country: item.country,
      location: item.location,
      rating: item.rating,
      description: item.description,
    });
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      alwaysBounceHorizontal={true}
    >
      <View className="flex-row gap-2">
        {data.map((item) => (
          <View key={item.id} className="rounded-3xl inset-shadow-xl">
            <Image
              source={item.imageUrl}
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
            <TouchableOpacity
              className="absolute bottom-0 bg-gray-800 opacity-80 rounded-b-3xl p-4 w-full"
              onPress={() => handlePress(item)}
            >
              <View className="relative items-start">
                <View className="flex-row items-center mb-2">
                  <Text className={`text-slate-200 text-lg font-bold`}>
                    {item.title},
                  </Text>
                  <Text className="text-slate-200 text-base">
                    {item.country}
                  </Text>
                </View>
                <View className="flex-row items-center -ml-1">
                  <Ionicons name="location" size={24} color={"white"} />
                  <Text className="text-slate-200 text-sm">
                    {item.location}
                  </Text>
                  <View className="p-2 bg-green-800 rounded-full ml-2">
                    <Text className="text-slate-200">{item.rating}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ExploreImageScroll;
