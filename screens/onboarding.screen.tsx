import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

const OnboardingScreen = () => {
  return (
    <LinearGradient colors={["#e7e9ec", "#cfd4df"]} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.container}>
        <Text className="text-3xl text-red-500">OnboardingScreen</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "#000000",
  },
});

export default OnboardingScreen;
