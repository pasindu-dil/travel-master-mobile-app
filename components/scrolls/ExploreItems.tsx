import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  item: any;
};

const ExploreItems = ({ item }: Props) => {
  const [liked, setLiked] = useState(false);

  return (
    <View className="flex-1 my-4 border border-slate-300 h-full">
      <TouchableOpacity className="flex-row justify-start items-start p-2">
        <View className="items-center p-3 bg-green-700 rounded-full">
          <Ionicons name="person" size={20} color="#d6c9c9" />
        </View>

        <View className="mt-1 ml-2">
          <Text className="text-slate-900 font-semibold">{item.name}</Text>
          <Text className="text-sm text-slate-600">20m</Text>
        </View>
      </TouchableOpacity>
      <Text className="text-slate-900 my-2 p-2">{item.title}</Text>
      <Image
        source={item.imageUrl}
        style={{ height: undefined, aspectRatio: 1, width: "100%" }}
        resizeMethod="auto"
        resizeMode="contain"
      />
      <View className="flex-row justify-between items-center m-2">
        <TouchableOpacity
          className="flex-row justify-between items-center mt-2"
          onPress={() => setLiked(!liked)}
        >
          <Ionicons
            name="heart"
            size={20}
            color={`${liked ? `green` : `#d6c9c9`}`}
          />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between items-center mt-2">
          <Ionicons name="chatbubbles" size={20} color="#d6c9c9" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExploreItems;
