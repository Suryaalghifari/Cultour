import { events } from "@/api/data/events";
import GlobalButton from "@/components/atoms/Button";
import Colors from "@/constants/color";
import { Typography } from "@/constants/Typography";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function EventList() {
  const router = useRouter();

  const handleSeeDetail = (eventId: string, placeId: string) => {
    router.push(`/dashboard/event/${placeId}/detail/${eventId}`);
  };

  const handleCreateEvent = () => {
    router.push("/dashboard/crudEvent/create");
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        {/* Header title + create button */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-[#1A1A1A]" style={Typography.styles.title}>
            Event
          </Text>
          <TouchableOpacity
            onPress={handleCreateEvent}
            className="bg-[#F3DDBF] px-4 py-2 rounded-xl"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text
              style={{
                color: "#1A1A1A",
                fontSize: 12,
                fontFamily: Typography.fontFamily.medium,
              }}
            >
              Create Event
            </Text>
          </TouchableOpacity>
        </View>

        {/* List event */}
        {events.map((event) => (
          <View key={event.id} className="items-center mb-6">
            <View
              className="w-full rounded-2xl p-4"
              style={{
                backgroundColor: Colors.primary50,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.08,
                shadowRadius: 4,
                elevation: 2,
              }}
            >
              <Image
                source={event.image}
                className="w-full h-40 rounded-xl mb-3"
                resizeMode="cover"
              />
              <Text
                className="text-lg font-semibold text-dark mb-4"
                style={Typography.styles.subtitle}
              >
                {event.title}
              </Text>

              <GlobalButton
                label="See Detail"
                onPress={() => handleSeeDetail(event.id, event.placeId)}
                variant="secondary"
                size="sm"
                textStyle={{
                  color: "#8B4513",
                  ...Typography.styles.caption,
                  fontFamily: Typography.fontFamily.medium,
                }}
                containerStyle={{
                  alignSelf: "flex-start",
                }}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
