import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Image, TouchableOpacity } from "react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerTitle: "" }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => (
            <FontAwesome
              size={28}
              style={{ marginBottom: -3 }}
              name="sun-o"
              color={"#f0a73f"}
            />
          ),
          headerLeft: () => (
            <Link href="/" asChild>
              <TouchableOpacity className="items-center h-full ml-2 ">
                <Image
                  className="w-36 h-full"
                  source={require("../../assets/images/caraguaturista.png")}
                />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
