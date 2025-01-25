import { useColorScheme } from "react-native";
import { themes } from "@/themes/theme";

const useThemeStyles = () => {
  const colorScheme = useColorScheme();
  const theme = themes[colorScheme ?? 'light'];
  return theme;
}

export default useThemeStyles