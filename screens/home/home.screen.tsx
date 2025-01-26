import useThemeStyles from "@/hooks/useThemeStyles";
import VideoScroll from "@/components/scrolls/VideoScroll";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type Props = {};

const video = [
  {
    id: "1",
    title: "Beach Waves",
    uri: require("../../assets/videos/tiktok1.mp4"),
  },
  {
    id: "2",
    title: "Mountain Views",
    uri: require("../../assets/videos/tiktok2.mp4"),
  },
  {
    id: "3",
    title: "City Lights",
    uri: require("../../assets/videos/tiktok3.mp4"),
  },
  {
    id: "4",
    title: "City Lights",
    uri: require("../../assets/videos/tiktok4.mp4"),
  },
  {
    id: "5",
    title: "City Lights",
    uri: require("../../assets/videos/Download.mp4"),
  },
  {
    id: "6",
    title: "City Lights",
    uri: require("../../assets/videos/Download (1).mp4"),
  },
];

const visibilityConfig = {
  itemVisiblePercentThreshold: 50,
};

const HomeScreen = (props: Props) => {
  const { text } = useThemeStyles();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <VideoScroll videos={video} />
    </GestureHandlerRootView>
  );
};

export default HomeScreen;
