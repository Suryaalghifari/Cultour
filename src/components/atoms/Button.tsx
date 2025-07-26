import { Typography } from "@/constants/Typography";
import Colors from "@/constants/color";
import React from "react";
import { Pressable, Text, TextStyle, ViewStyle } from "react-native";

interface GlobalButtonProps {
  label: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const GlobalButton: React.FC<GlobalButtonProps> = ({
  label,
  onPress,
  containerStyle,
  textStyle,
}) => {
  return (
    <Pressable
      onPress={onPress}
      className="rounded-xl h-12 justify-center items-center px-6"
      style={[{ backgroundColor: Colors.primary }, containerStyle]}
    >
      <Text
        className="text-[#1A1A1A]"
        style={[Typography.styles.body, textStyle]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default GlobalButton;
