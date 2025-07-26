import Colors from "@/constants/color";
import { Typography } from "@/constants/Typography";
import { Icon } from "@iconify/react";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface EventHeaderProps {
  title: string;
  onBack?: () => void;
  onCreateEvent?: () => void;
}

const EventHeader: React.FC<EventHeaderProps> = ({
  title,
  onBack,
  onCreateEvent,
}) => {
  return (
    <View
      className="flex-row items-center justify-between px-6 pt-12 pb-6 rounded-b-[40px]"
      style={{ backgroundColor: Colors.primary }}
    >
      {/* Back Button */}
      <TouchableOpacity onPress={onBack} className="p-2">
        <Icon
          icon="mdi:arrow-left"
          width={28}
          height={28}
          color={Colors.textPrimary}
        />
      </TouchableOpacity>

      {/* Title */}
      <Text
        className="flex-1 text-center -ml-9"
        style={{
          ...Typography.styles.title,
          color: Colors.textPrimary,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default EventHeader;
