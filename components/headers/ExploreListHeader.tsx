import { View, Text } from "react-native";
import Search from "../inputs/Search";
import ExploreTabs from "../scrolls/ExploreTabs";
import ExploreImageScroll from "../scrolls/ExploreImageScroll";
import useThemeStyles from "@/hooks/useThemeStyles";

type Props = {};

const ExploreListHeader = (props: Props) => {
  return (
    <>
      <Search />
      <ExploreTabs />
      <View className="mt-4">
        <ExploreImageScroll />
      </View>
    </>
  );
};

export default ExploreListHeader;
