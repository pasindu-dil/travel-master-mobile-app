import useThemeStyles from "@/hooks/useThemeStyles";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  name: string;
  onPress: () => void;
};

const Button = ({ name, onPress }: Props) => {
  const { text } = useThemeStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      className="m-2 p-4 bg-green-600 rounded-lg w-full items-center"
    >
      <Text className={`${text} font-bold text-xl`}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
