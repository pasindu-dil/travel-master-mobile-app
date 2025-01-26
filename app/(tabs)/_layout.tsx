import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
          tabBarActiveTintColor: "green",
        }}
      />
      <Tabs.Screen
        name="explore/index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={color}
            />
          ),
          tabBarActiveTintColor: "green",
        }}
      />
      <Tabs.Screen
        name="upload/index"
        options={{
          title: "Upload",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add" : "add-outline"}
              size={24}
              color={"white"}
            />
          ),
          tabBarLabelStyle: { display: "none" },
          tabBarActiveTintColor: "white",
          tabBarIconStyle: {
            backgroundColor: "green",
            borderRadius: 100,
            width: 60,
            height: 40,
          },
        }}
      />
      <Tabs.Screen
        name="places/index"
        options={{
          title: "Places",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "location" : "location-outline"}
              size={24}
              color={color}
            />
          ),
          tabBarActiveTintColor: "green",
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              size={24}
              color={color}
            />
          ),
          tabBarActiveTintColor: "green",
        }}
      />
    </Tabs>
  );
}
