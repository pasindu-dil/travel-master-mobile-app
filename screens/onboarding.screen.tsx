import Button from "@/components/buttons/Button";
import SocialMediaSignUp from "@/components/buttons/SocialMediaSignUp";
import useThemeStyles from "@/hooks/useThemeStyles";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const OnboardingScreen = () => {
  const { text } = useThemeStyles();

  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={require("../assets/images/background/beach.jpg")}
        className="w-full h-full absolute"
      />
      <ScrollView
        keyboardShouldPersistTaps="handled" // Ensures TouchableOpacity works
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View className="flex-1 justify-between mb-14 mx-8">
          <View className="items-center mt-32">
            <Text className="text-8xl italic font-bold text-slate-100">
              Travel
            </Text>
          </View>
          <View className="items-center">
            <Text className="text-5xl text-slate-100 font-bold mb-4">
              Welcome!
            </Text>
            <Text className="text-2xl text-slate-50 text-center">
              Discover interesting short videos from around the world.
            </Text>
            <Text className="text-2xl text-slate-50 text-center">
              You can also create your own and share them with the world. Find
              your next destination here.
            </Text>
          </View>
          <View className="items-center">
            <Text className="text-3xl text-slate-100 font-bold">Explore</Text>
            <TouchableOpacity onPress={() => router.push("/(tabs)")}>
              <Image
                source={require("../assets/images/gif/explore2.gif")}
                className="w-24 h-24"
              />
            </TouchableOpacity>
          </View>
          <View className="items-center">
            <Button name="Sign In" onPress={() => router.push("/sign-in")} />
            <SocialMediaSignUp
              handleApplePress={() => {}}
              handleGooglePress={() => {}}
              handleFacebookPress={() => {}}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OnboardingScreen;
