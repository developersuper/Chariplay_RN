import React from "react";
import RNBounceable from "@freakycoder/react-native-bounceable";
import Icon, { IconType } from "react-native-dynamic-vector-icons";

import { palette } from "@theme/themes";

const MenuButton = () => (
  <RNBounceable>
    <Icon
      name="menu"
      type={IconType.Ionicons}
      color={palette.white}
      size={30}
    />
  </RNBounceable>
);

export default MenuButton;
