import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

type Props = {
    item: any
}

const VideoToolbar = ({ item }: Props) => {
    const [isLiked, setIsLiked] = useState(false);

    const incrementLikes = (id: string) => {
        setIsLiked(!isLiked);
        item.likes = !isLiked ? item.likes + 1 : item.likes - 1;
    };
    return (
        <View className="absolute bottom-2 m-2 w-full">
            <View className="relative flex-row items-end justify-between">
                <View className="w-[60%]">
                    <Text className="text-white text-2xl font-bold">{item.user}</Text>
                    <Text className="text-white text-xl font-semibold">{item.title}</Text>
                    <Text className="text-white text-base font-semibold">{item.description}</Text>
                </View>
                <View className="mr-3 mb-2 flex-col-reverse">
                    <TouchableOpacity className="items-center p-3 bg-green-700 rounded-full">
                        <Ionicons name="person" size={32} color="#d6c9c9" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="items-center p-2  rounded-full"
                        onPress={() => { }}
                    >
                        <Ionicons
                            name={`share-social`}
                            color={"white"}
                            size={32}
                        />
                        <Text className="text-white text-base font-bold">
                            {item.shares}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="items-center p-2  rounded-full"
                    >
                        <Ionicons
                            name={`chatbox`}
                            color={"white"}
                            size={28}
                        />
                        <Text className="text-white text-base font-bold">
                            {item.comments}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="items-center p-2  rounded-full"
                        onPress={() => incrementLikes(item.id)}
                    >
                        <Ionicons
                            name={isLiked
                                ? "heart"
                                : "heart-outline"
                            }
                            color={isLiked ? "green" : "white"}
                            size={28}
                        />
                        <Text className="text-white text-base font-bold">
                            {item.likes}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default VideoToolbar