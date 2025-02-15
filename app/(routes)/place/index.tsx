import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

type Props = {};

const index = (props: Props) => {
  const route = useRoute();
  const { id } = route.params;
  console.log(id);

  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default index;
