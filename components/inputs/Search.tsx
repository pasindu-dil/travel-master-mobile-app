import { TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import useThemeStyles from "@/hooks/useThemeStyles";

const Search = () => {
  const { text } = useThemeStyles();

  return (
    <View className="my-2">
      <TextInput
        placeholder="Search"
        className={`${text} p-5 pl-11 text-start bg-slate-50 dark:bg-slate-800 border-slate-400 dark:border-white border-2 rounded-full`}
      />
      <Ionicons
        name="search"
        size={24}
        color="#9b8181"
        className="absolute top-4 pl-3"
      />
    </View>
  );
};

export default Search;
