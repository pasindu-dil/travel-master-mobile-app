import { Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <StatusBar style="dark" />
      <Redirect href={isLoggedIn ? "/(tabs)/" : "/onboarding"} />
    </>
  );
};

export default Index;
