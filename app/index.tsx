import OnboardingScreen from "@/screens/onboarding.screen";
import { Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useColorScheme } from '@/components/useColorScheme';

const Index = () => {
  const colorScheme = useColorScheme();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <StatusBar style={colorScheme === 'dark' ? "light" : "dark"} />
      <OnboardingScreen/>
      {/* <Redirect href={isLoggedIn ? "/(tabs)/" : "/onboarding"} /> */}
    </>
  );
};

export default Index;
