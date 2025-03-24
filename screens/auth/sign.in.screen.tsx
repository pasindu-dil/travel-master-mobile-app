import Button from "@/components/buttons/Button";
import AuthContext from "@/context/AuthContext";
import useThemeStyles from "@/hooks/useThemeStyles";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import * as Keychain from 'react-native-keychain';

const SignInScreen = () => {
  const { text } = useThemeStyles();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleSignIn = async () => {
    const email = formData.username;
    const password = formData.password;

    if (!email || !password) {
      return;
    }

    try {
      const response = await fetch("http://172.20.10.2:8000/api/v1/jwt/create/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      
      const token = await response.json();   
      storeTokens(token);

      if (token.access) {
        setIsAuthenticated(true)
        router.replace("/(tabs)");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const storeTokens = async ({access, refresh}) => {
    await Keychain.setGenericPassword(access, refresh);
  }

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
          <Text className={`${text} text-2xl font-bold`}>
            Sign into your account
          </Text>
          <View className="w-full align-middle mt-14 gap-4">
            <View>
              <TextInput
                placeholder="Email"
                placeholderTextColor={"#f7f0f0"}
                keyboardType="email-address"
                className={`${text} text-lg bg-slate-800 rounded-lg p-5 pl-12`}
                onChangeText={(text) => setFormData({ ...formData, username: text })}
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
                onChangeText={(text) => setFormData({ ...formData, password: text })}
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
            <View>
              <TouchableOpacity>
                <Text className="text-green-700 text-lg font-bold">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="items-center w-full">
          <Button name="Sign In" onPress={handleSignIn} />
          <View className="flex-row items-center mt-4 mb-2">
            <Text className={`${text} text-lg`}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/sign-up")}>
              <Text className={`text-green-700 text-lg font-bold`}>
                {" "}
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
