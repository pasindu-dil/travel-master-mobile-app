import useThemeStyles from "@/hooks/useThemeStyles";
import { Ionicons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import RenderContents from "./RenderContents";
import { useFocusEffect } from "expo-router";
import VideoToolbar from "../toolbar/VideoToolbar";

type Props = {
  videos: Array<{
    id: string;
    title: string;
    url: any;
    type: string;
    uri: any;
    user: string;
    description: string;
    shares: string;
    comments: string;
    likes: string;
  }>;
};

const { height, width } = Dimensions.get("window");
const TABBAR_HEIGHT = 80; // Adjust this as needed

const visibilityConfig = {
  itemVisiblePercentThreshold: 50,
};

const VideoScroll = ({ videos }: Props) => {
  const { text } = useThemeStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  const handleViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const handleVideoPress = (videoStatus: any) => {
    if (videoStatus.didJustFinish && currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const scrollToIndex = (index: number) => {
    if (index < videos.length) {
      setCurrentIndex(index);
    }
  };

  useFocusEffect(
    useCallback(() => {
      scrollToIndex(currentIndex);

      videoRefs.current.forEach((videoRef, index) => {
        if (videoRef) {
          if (index === currentIndex) {
            videoRef.playAsync();
          } else {
            videoRef.pauseAsync();
          }
        }
      });

      return () => {
        videoRefs.current.forEach((videoRef) => {
          if (videoRef) {
            videoRef.pauseAsync();
          }
        });
      };
    }, [currentIndex])
  );

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          width: width,
          height: height - TABBAR_HEIGHT,
        }}
        className="justify-center items-center"
      >
        <View className="w-full h-full">
          {item.type === "image" ? (
            <View className="items-center justify-center">
              <Image
                source={item.uri}
                style={{
                  width,
                  height,
                  backgroundColor: "black",
                }}
                resizeMode="contain"
                className="w-full h-full"
              />
            </View>
          ) : (
            <Video
              ref={(ref) => (videoRefs.current[index] = ref)}
              source={item.uri}
              resizeMode={ResizeMode.CONTAIN}
              useNativeControls
              isLooping
              shouldPlay={index === currentIndex}
              style={{
                width,
                height,
              }}
            />
          )}
          <VideoToolbar item={item} />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={videos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      pagingEnabled
      horizontal={false}
      showsVerticalScrollIndicator={false}
      onViewableItemsChanged={handleViewableItemsChanged}
      viewabilityConfig={visibilityConfig}
    />
  );
};

export default VideoScroll;

