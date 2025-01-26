import Button from "@/components/buttons/Button";
import SocialMediaSignUp from "@/components/buttons/SocialMediaSignUp";
import useThemeStyles from "@/hooks/useThemeStyles";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

const SignUpScreen = () => {
  const { text } = useThemeStyles();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <View className="flex-1 justify-between mt-14 mx-8 mb-10">
        <View className="items-start mt-8">
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="leftcircle" size={42} color="#f7f0f0" />
          </TouchableOpacity>
        </View>
        <View className="items-center">
          <Text className="text-5xl font-bold text-green-700 my-5">
            Register
          </Text>
          <Text className={`${text} text-2xl font-bold`}>
            Sign into your account
          </Text>
          <View className="w-full align-middle mt-14 gap-4">
            <View>
              <TextInput
                placeholder="Username"
                placeholderTextColor={"#f7f0f0"}
                keyboardType="default"
                className={`${text} text-lg bg-slate-800 rounded-lg p-5 pl-12`}
              />
              <Ionicons
                name="person"
                size={24}
                color={"green"}
                className="absolute top-[30%] left-2"
              />
            </View>
            <View>
              <TextInput
                placeholder="Email"
                placeholderTextColor={"#f7f0f0"}
                keyboardType="email-address"
                className={`${text} text-lg bg-slate-800 rounded-lg p-5 pl-12`}
              />
              <Ionicons
                name="mail"
                size={24}
                color={"green"}
                className="absolute top-[30%] left-2"
              />
            </View>
            <View>
              <TextInput
                placeholder="Password"
                placeholderTextColor={"#f7f0f0"}
                secureTextEntry={!isPasswordVisible}
                className={`${text} text-lg bg-slate-800 rounded-lg p-5 pl-12`}
              />
              <Ionicons
                name="key"
                size={24}
                color={"green"}
                security={true}
                className="absolute top-[30%] left-2"
              />
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                className="px-3 py-3 absolute top-1 right-2"
              >
                {!isPasswordVisible ? (
                  <Ionicons name="eye" size={24} color={"green"} />
                ) : (
                  <Ionicons name="eye-off" size={24} color={"green"} />
                )}
              </TouchableOpacity>
            </View>
            <View className="items-center w-full">
              <Button name="Sign Up" onPress={() => router.push("/(tabs)")} />
            </View>
          </View>
        </View>
        <View className="items-center w-full">
          <View className="items-center relative">
            <View className="absolute border-b-8 border-green-700 w-full" ></View>
            <Text className={`${text} text-lg font-bold}`}>
              Or continue with
            </Text>
          </View>
          <SocialMediaSignUp
            handleApplePress={() => {}}
            handleGooglePress={() => {}}
            handleFacebookPress={() => {}}
          />
          <View className="flex-row items-center mt-4 mb-2">
            <Text className={`${text} text-lg`}>Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/sign-in")}>
              <Text className={`text-green-700 text-lg font-bold`}>
                {" "}
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
