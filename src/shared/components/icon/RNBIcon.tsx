import React from "react";
import RNBounceable from "@freakycoder/react-native-bounceable";
import Icon, { IconType } from "react-native-dynamic-vector-icons";

type RNBIconProps = {
  name: string;
  type: IconType;
  color: string;
  size: number;
};

const RNBIcon: React.FC<RNBIconProps> = ({ name, type, color, size }) => (
  <RNBounceable>
    <Icon name={name} type={type} color={color} size={size} />
  </RNBounceable>
);

export default RNBIcon;
