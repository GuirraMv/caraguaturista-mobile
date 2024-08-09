import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (
    <View className="w-full h-16 flex-row bg-white items-center justify-between">
      <Image
        className="w-40 h-16 ml-1"
        source={require("../assets/images/caraguaturista.png")}
      />

      <View className="mr-1">
        <TouchableOpacity>
          <Feather name="menu" size={40} color={"#f0a73f"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
