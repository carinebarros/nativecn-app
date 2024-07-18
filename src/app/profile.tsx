import { Image, View } from "react-native";

import { User } from "@/components/User";

export const Profile = () => (
  <View className="flex-1 bg-gray-700">
    <Image
      source={require("@/assets/banner.png")}
      className="w-full h-52 -mb-16"
    />
    <User />
  </View>
);
