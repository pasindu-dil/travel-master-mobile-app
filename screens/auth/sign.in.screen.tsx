import useThemeStyles from "@/hooks/useThemeStyles";
import { View, Text } from "react-native";

const SignInScreen = () => {
  const { text } = useThemeStyles();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className={`${text}`}>SignInScreen</Text>
    </View>
  );
};

export default SignInScreen;
