import Header from "@/components/header";
import images from "@/constants/Images";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Home() {
  const { width: PAGE_WIDTH } = Dimensions.get("window");

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <Header />

        <ScrollView>
          <Carousel
            width={PAGE_WIDTH}
            height={PAGE_WIDTH}
            data={images}
            autoPlay={true}
            autoPlayInterval={10000}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
            }}
            renderItem={({ index, item }) => (
              <View key={index} className="items-center justify-center flex-1">
                <Image className="h-full w-full" src={item.imgUrl} />
                <View className="bg-black w-full bottom-9 opacity-90 h-50">
                  <Text className="text-gray-50">{item.body}</Text>
                </View>
              </View>
            )}
          />

          <StatusBar barStyle={"dark-content"} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
