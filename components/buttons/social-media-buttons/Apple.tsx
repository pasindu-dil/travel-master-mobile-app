import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

type Props = {
  onPress: () => void;
};

const Apple = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className="items-center bg-white rounded-full p-5">
      <FontAwesome name="apple" size={24} color={"green"} />
    </TouchableOpacity>
  );
};

export default Apple;
