import React from "react";
import RNText, { IRNTextProps } from "@freakycoder/react-native-custom-text";
/**
 * ? Local Imports
 */
import fonts from "@fonts";

interface ITextWrapperProps extends IRNTextProps {
  color?: string;
  fontFamily?: string;
  children?: React.ReactNode;
  size?: number;
}

const TextWrapper: React.FC<ITextWrapperProps> = ({
  fontFamily = fonts.montserrat.regular,
  color = "#757575",
  size = 14,
  children,
  ...rest
}) => {
  return (
    <RNText
      fontFamily={fontFamily}
      color={color}
      style={{ fontSize: size }}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default TextWrapper;
