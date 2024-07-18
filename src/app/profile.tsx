import { Image, View } from "react-native";

import { User } from "@/components/User";
import { Skills } from "@/components/Skills";
import { Preferences } from "@/components/Preferences";

export const Profile = () => (
  <View className="flex-1 bg-gray-700">
    <Image
      source={require("@/assets/banner.png")}
      className="w-full h-52 -mb-16"
    />

    <View className="flex-1 px-4 pb-4">
      <User />
      <Skills />
      <Preferences />
    </View>
  </View>
);
