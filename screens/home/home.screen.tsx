import useThemeStyles from "@/hooks/useThemeStyles";
import VideoScroll from "@/components/scrolls/VideoScroll";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useMemo, useState } from "react";

type Props = {};

const video = [
  {
    id: "1",
    title: "This is the beach video.",
    description:
      "Exploring the beautiful forests of Sri Lanka! #srilankatourism #forests #wildlife #ecotourism #sustainabletravel #naturelovers #adventuretime #travelwithme",
    user: "@dilshan",
    uri: require("../../assets/videos/tiktok1.mp4"),
    likes: 100,
    comments: 20,
    shares: 10,
  },
  {
    id: "10",
    title: "This is the beach video.",
    description:
      "Exploring the beautiful forests of Sri Lanka! #srilankatourism #forests #wildlife #ecotourism #sustainabletravel #naturelovers #adventuretime #travelwithme",
    user: "@dilshan",
    type: "image",
    uri: require("../../assets/images/places/test.webp"),
    likes: 568,
    comments: 20,
    shares: 10,
  },
  {
    id: "2",
    title: "Mountain Views",
    description:
      "Exploring the beautiful forests of Sri Lanka! #srilankatourism #forests #wildlife #ecotourism #sustainabletravel #naturelovers #adventuretime #travelwithme",
    user: "@pasindu",
    uri: require("../../assets/videos/tiktok2.mp4"),
    likes: 455,
    comments: 20,
    shares: 10,
  },
  {
    id: "3",
    title: "This is the description of the video.",
    description:
      "Beautiful australian night landscape with stars and moon. #FYP #australia #night #landscape #stars",
    user: "@dilu-beats",
    uri: require("../../assets/videos/tiktok3.mp4"),
    likes: 100,
    comments: 20,
    shares: 45,
  },
  {
    id: "4",
    title: "City Lights",
    description: "",
    user: "@prabhu",
    uri: require("../../assets/videos/tiktok4.mp4"),
    likes: 874,
    comments: 20,
    shares: 10,
  },
  {
    id: "5",
    title: "City Lights",
    description: "",
    user: "@prabuddhi",
    uri: require("../../assets/videos/Download.mp4"),
    likes: 874,
    comments: 20,
    shares: 10,
  },
  {
    id: "6",
    title: "City Lights",
    description: "",
    user: "@dula",
    uri: require("../../assets/videos/Download (1).mp4"),
    likes: 124,
    comments: 20,
    shares: 10,
  },
];

const visibilityConfig = {
  itemVisiblePercentThreshold: 50,
};

const HomeScreen = (props: Props) => {
  const videoList = useMemo(() => video, [video]);
  const [liked, setLiked] = useState(false);

  const incrementLikes = (id: string) => {
    const index = videoList.findIndex((video) => video.id === id);
    videoList[index].likes += 1;
    setLiked(true);
  };

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <VideoScroll videos={videoList} manageCountLikes={incrementLikes} isLiked={liked} manageSetLiked={setLiked} />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
