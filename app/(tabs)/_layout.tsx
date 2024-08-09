import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
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
        }}
      />
    </Tabs>
  );
}
