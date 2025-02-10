import { View, ScrollView } from "react-native";
import React from "react";
import LabelButton from "../buttons/LabelButton";

const ExploreTabs = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      <View className="mt-4 flex-row justify-between gap-2">
        <LabelButton name="Location" handleClick={() => {}} />
        <LabelButton name="Hotels" handleClick={() => {}} />
        <LabelButton name="Food" handleClick={() => {}} />
        <LabelButton name="Adventure" handleClick={() => {}} />
        <LabelButton name="Adventure" handleClick={() => {}} />
      </View>
    </ScrollView>
  );
};

export default ExploreTabs;
