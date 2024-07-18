import { Text, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

export const User = () => (
  <View className="items-center">
    <Avatar className="w-32 h-32 border-4 border-gray-600">
      <AvatarImage source={{ uri: "https://picsum.photos/id/64/200/200" }} />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>

    <Text className="text-white font-bold text-2xl marker:">Jane Doe</Text>

    <Text className="text-gray-400 text-lg">@janedoe</Text>
  </View>
);
