import useThemeStyles from "@/hooks/useThemeStyles";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { ResizeMode, Video } from "expo-av";
import { useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
} from "react-native";

type Props = {
  videos: Array<{ id: string; title: string; url: any }>;
};

const { height, width } = Dimensions.get("window");
const TABBAR_HEIGHT = 80; // Adjust this as needed

const visibilityConfig = {
  itemVisiblePercentThreshold: 50,
};

const VideoScroll = ({ videos }: Props) => {
  const { text } = useThemeStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [status, setStatus] = useState({});
  const flatListRef = useRef(null);
  const videoRefs = useRef([]);
  const route = useRoute();

  const handleViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const handleVideoPress = (videoStatus: any) => {
    setStatus(videoStatus);

    if (videoStatus.didJustFinish && currentIndex < videos.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    }
  };

  const handleVideoPause = (currentIndex: number) => {
    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef) {
        if (index === currentIndex) {
          if (status.isPlaying) {
            videoRef.pauseAsync();
          } else {
            videoRef.playAsync();
          }
        }
      }
    });
  };

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
  }, [currentIndex]);

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          width: width,
          height: height - TABBAR_HEIGHT,
        }}
        className={`justify-center items-center`}
      >
        <View className="w-full h-full">
          <TouchableWithoutFeedback onPress={() => handleVideoPause(index)}>
            <Video
              ref={(ref) => (videoRefs.current[index] = ref)}
              source={item.uri}
              resizeMode={ResizeMode.CONTAIN}
              useNativeControls={false}
              isLooping
              shouldPlay={index === currentIndex}
              onPlaybackStatusUpdate={(videoStatus) =>
                handleVideoPress(videoStatus)
              }
              style={{
                width: width,
                height: height,
              }}
            />
          </TouchableWithoutFeedback>
          <View className="absolute bottom-2 m-2 w-full">
            <View className="relative flex-row items-end justify-between">
              <View className="w-[60%]">
                <Text className={`${text} text-2xl`}>{item.user}</Text>
                <Text className={`${text} text-xl`}>{item.title}</Text>
                <Text className={`${text} text-base`}>{item.description}</Text>
              </View>
              <View className="mr-4">
                <TouchableOpacity className="items-center p-3 bg-green-700 rounded-full">
                  <Ionicons name="person" size={32} color="#d6c9c9" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={videos}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      pagingEnabled
      horizontal={false}
      showsVerticalScrollIndicator={false}
      onViewableItemsChanged={handleViewableItemsChanged}
      viewabilityConfig={visibilityConfig}
      ref={flatListRef}
    />
  );
};

export default VideoScroll;
