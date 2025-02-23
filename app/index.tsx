import OnboardingScreen from "@/screens/onboarding.screen";
import { Redirect, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";
import { useColorScheme } from '@/components/useColorScheme';
import * as Keychain from 'react-native-keychain';
import Onboarding from "./(routes)/onboarding";

const Index = () => {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar style={colorScheme === 'dark' ? "light" : "dark"} />
      <Onboarding />
    </>
  );
};

export default Index;
