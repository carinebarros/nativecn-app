import { useState } from "react";
import { View } from "react-native";

import { Checkbox } from "@/components/Checkbox";
import { Option } from "@/components/Option";
import { Switch } from "@/components/Switch";
import { Title } from "@/components/Title";

export const Preferences = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View>
      <Title>Preferences</Title>

      <Option>
        <Option.Icon icon="dark-mode" />
        <Option.Title>Dark mode</Option.Title>
        <Switch value={isEnabled} onValueChange={setIsEnabled} />
      </Option>

      <Option>
        <Option.Icon icon="email" />
        <Option.Title>Public email</Option.Title>
        <Checkbox />
      </Option>
    </View>
  );
};
