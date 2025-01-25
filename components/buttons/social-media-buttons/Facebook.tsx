import { FontAwesome } from "@expo/vector-icons";
import { Image, TouchableOpacity } from "react-native";

type Props = {
  onPress: () => void;
};

const Facebook = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="items-center bg-white rounded-full"
    >
      {/* <Image source={require("../../../assets/images/icons/google.webp")} width={8} height={8} /> */}
      <FontAwesome name="facebook" size={24} color={"black"} />
    </TouchableOpacity>
  );
};

export default Facebook;