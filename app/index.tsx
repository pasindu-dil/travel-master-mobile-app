import OnboardingScreen from "@/screens/onboarding.screen";
import { Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <StatusBar style="dark" />
      <OnboardingScreen/>
      {/* <Redirect href={isLoggedIn ? "/(tabs)/" : "/onboarding"} /> */}
    </>
  );
};

export default Index;
