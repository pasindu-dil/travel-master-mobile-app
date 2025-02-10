import { View, Text } from "react-native";
import Search from "../inputs/Search";
import ExploreTabs from "../scrolls/ExploreTabs";
import ExploreImageScroll from "../scrolls/ExploreImageScroll";
import useThemeStyles from "@/hooks/useThemeStyles";

type Props = {};

const ExploreListHeader = (props: Props) => {
  const {text} = useThemeStyles();
  return (
    <>
      <View className="flex flex-row justify-between">
        <Text className={`${text}`}>Explore</Text>
        <View>
          <Text className={`${text}`}>Explore</Text>
        </View>
      </View>
      <Search />
      <ExploreTabs />
      <View className="mt-4">
        <ExploreImageScroll />
      </View>
    </>
  );
};

export default ExploreListHeader;
