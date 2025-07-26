// src/components/GlobalButton.tsx

import Colors from "@/constants/color";
import { Typography } from "@/constants/Typography";
import React from "react";
import {
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface GlobalButtonProps {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  className?: string;
}

const GlobalButton: React.FC<GlobalButtonProps> = ({
  label,
  onPress,
  variant = "primary",
  size = "md",
  disabled = false,
  iconLeft,
  iconRight,
  containerStyle,
  textStyle,
  className = "",
}) => {
  const getBackgroundColor = () => {
    if (disabled) return Colors.disabled;
    switch (variant) {
      case "secondary":
        return Colors.primary50;
      case "outline":
        return "transparent";
      default:
        return Colors.buttonPrimary;
    }
  };

  const getTextColor = () => {
    if (disabled) return Colors.textDisabled;
    switch (variant) {
      case "outline":
        return Colors.buttonPrimary;
      default:
        return Colors.textPrimary;
    }
  };

  const getBorderStyle = () => {
    if (variant === "outline") {
      return {
        borderWidth: 1,
        borderColor: Colors.primary,
      };
    }
    return {};
  };

  const getSizeStyle = () => {
    switch (size) {
      case "sm":
        return "h-10 px-4";
      case "lg":
        return "h-14 px-6";
      default:
        return "h-12 px-5";
    }
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`rounded-xl justify-center items-center flex-row ${getSizeStyle()} ${className}`}
      style={[
        { backgroundColor: getBackgroundColor() },
        getBorderStyle(),
        containerStyle,
      ]}
    >
      {iconLeft && <View className="mr-2">{iconLeft}</View>}
      <Text
        className="text-base font-medium"
        style={[{ color: getTextColor() }, Typography.styles.body, textStyle]}
      >
        {label}
      </Text>
      {iconRight && <View className="ml-2">{iconRight}</View>}
    </Pressable>
  );
};

export default GlobalButton;
