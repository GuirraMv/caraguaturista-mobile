import images from "@/constants/Images";
import { Dimensions, Image, StatusBar, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default function Home() {
  const { width: PAGE_WIDTH } = Dimensions.get("window");

  return (
    <View className="flex-1 items-center justify-center">
      <Carousel
        width={PAGE_WIDTH}
        height={PAGE_WIDTH}
        data={images}
        autoPlay={true}
        autoPlayInterval={10000}
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
    </View>
  );
}
