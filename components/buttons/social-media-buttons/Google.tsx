import { FontAwesome } from "@expo/vector-icons";
import { Image, TouchableOpacity } from "react-native";

type Props = {
  onPress: () => void;
};

const Google = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="items-center bg-white rounded-full p-4"
    >
      {/* <Image source={require("../../../assets/images/icons/google.webp")} className="w-8 h-8" /> */}
      <FontAwesome name="google" size={24} color={"green"} />
    </TouchableOpacity>
  );
};

export default Google;
