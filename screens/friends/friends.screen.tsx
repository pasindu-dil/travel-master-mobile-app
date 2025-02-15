import ExploreListHeader from "@/components/headers/ExploreListHeader";
import ExploreItems from "@/components/scrolls/ExploreItems";
import { useCallback, useState } from "react";
import { RefreshControl, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    imageUrl: require("../../assets/images/places/china_wall_ssk500.jpeg"),
    name: "Dilshan Chathuranga",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    imageUrl: require("../../assets/images/places/Most-Beautiful-Places-in-the-World-750x430.jpg"),
    name: "Dilshan Chathuranga",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    imageUrl: require("../../assets/images/places/top-places-to-visit-in-the-world-london-england.jpg"),
    name: "Dilshan Chathuranga",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Third Item",
    imageUrl: require("../../assets/images/places/bora-bora-gettyimages-575766591.avif"),
    name: "Dilshan Chathuranga",
  },
];

const FriendsScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 justify-center mx-2">
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ExploreItems item={item} />}
          ListHeaderComponent={<ExploreListHeader />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default FriendsScreen;
