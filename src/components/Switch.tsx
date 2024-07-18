import { colors } from "@/styles/colors";
import { Switch as NativeSwitch } from "react-native";

export const Switch = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof NativeSwitch>) => (
  <NativeSwitch
    trackColor={{ true: colors.green[400], false: colors.gray[500] }}
    thumbColor={colors.green[500]}
    {...props}
  />
);
