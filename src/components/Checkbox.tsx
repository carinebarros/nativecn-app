import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { cn } from "@/lib/utils";

import { colors } from "@/styles/colors";

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof View> {
  label?: string;
  labelClasses?: string;
  checkboxClasses?: string;
}

export const Checkbox = ({
  label,
  labelClasses,
  checkboxClasses,
  className,
  ...props
}: CheckboxProps) => {
  const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked((prev) => !prev);
  };

  return (
    <View
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    >
      <TouchableOpacity onPress={toggleCheckbox}>
        <View
          className={cn(
            "w-8 h-8 rounded bg-gray-800 flex justify-center items-center",
            {
              "bg-green-500": isChecked,
            },
            checkboxClasses
          )}
        >
          {isChecked && (
            <MaterialIcons name="check" size={20} color={colors.gray[800]} />
          )}
        </View>
      </TouchableOpacity>
      {label && (
        <Text className={cn("text-primary", labelClasses)}>{label}</Text>
      )}
    </View>
  );
};
