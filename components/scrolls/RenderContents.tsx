import { Ionicons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";

type Props = {};

const { height, width } = Dimensions.get("window");
const TABBAR_HEIGHT = 80; // Adjust this as needed

const visibilityConfig = {
  itemVisiblePercentThreshold: 50,
};


const RenderContents = ({ items, isLiked, manageCountLikes, manageSetLiked }: Props) => {
    const { item, index } = items;
    console.log(item);
    
  const [currentIndex, setCurrentIndex] = useState(0);
  const [status, setStatus] = useState({});
  const flatListRef = useRef(null);
  const videoRefs = useRef([]);

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

  // const handleVideoPause = (currentIndex: number) => {
  //   videoRefs.current.forEach((videoRef, index) => {
  //     if (videoRef) {
  //       if (index === currentIndex) {
  //         if (status.isPlaying) {
  //           videoRef.pauseAsync();
  //         } else {
  //           videoRef.playAsync();
  //         }
  //       }
  //     }
  //   });
  // };

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
  }, [currentIndex]);

  return (
    <View
      style={{
        width: width,
        height: height - TABBAR_HEIGHT,
      }}
      className={`justify-center items-center`}
    >
      <View className="w-full h-full">
        {/* <TouchableWithoutFeedback> */}
        {item.type === "image" ? (
          <Image
            // ref={(ref) => (videoRefs.current[index] = ref)}
            source={item.uri}
            style={{
              width: width,
              height: height,
              backgroundColor: "black",
            }}
            resizeMode="contain"
          />
        ) : (
          <Video
            ref={(ref) => (videoRefs.current[index] = ref)}
            source={item.uri}
            resizeMode={ResizeMode.CONTAIN}
            useNativeControls={true}
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
        )}
        {/* </TouchableWithoutFeedback> */}
        <View className="absolute bottom-2 m-2 w-full">
          <View className="relative flex-row items-end justify-between">
            <View className="w-[60%]">
              <Text className={`text-white text-2xl font-bold`}>
                {item.user}
              </Text>
              <Text className={`text-white text-xl font-semibold`}>
                {item.title}
              </Text>
              <Text className={`text-white text-base font-semibold`}>
                {item.description}
              </Text>
            </View>
            <View className="mr-4 mb-2 gap-2 flex-col-reverse">
              <TouchableOpacity className="items-center p-3 bg-green-700 rounded-full">
                <Ionicons name="person" size={32} color="#d6c9c9" />
              </TouchableOpacity>
              <TouchableOpacity className="items-center">
                <Ionicons name={"share-social"} color={"white"} size={28} />
                <Text className="text-white text-base">{item.shares}</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center">
                <Ionicons name={"chatbox"} color={"white"} size={28} />
                <Text className="text-white text-base">{item.comments}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="items-center"
                onPress={() => manageCountLikes(item.id)}
              >
                <Ionicons
                  name={isLiked ? "heart" : "heart-outline"}
                  color={isLiked ? "green" : "white"}
                  size={28}
                />
                <Text className="text-white text-base">{item.likes}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RenderContents;
