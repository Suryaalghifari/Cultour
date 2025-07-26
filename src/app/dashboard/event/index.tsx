import EventHeader from "@/components/EventHeader";
import Colors from "@/constants/color";
import { Typography } from "@/constants/Typography";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

// Data event dummy
const events = [
  {
    id: "1",
    title: "Asia Afrika Festival",
    placeId: "1",
    image: require("@/assets/images/place/Bandung.png"),
  },
  {
    id: "2",
    title: "Angklung Pride",
    placeId: "3",
    image: require("@/assets/images/place/Jogja.png"),
  },
];

export default function EventPage() {
  // Handler
  const handleBack = () => {
    // TODO: implementasi navigasi back
  };
  const handleCreateEvent = () => {
    // TODO: implementasi create event
  };
  const handleDetail = (id: string) => {
    // TODO: implementasi detail event
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <EventHeader
        title="Event"
        onBack={handleBack}
        onCreateEvent={handleCreateEvent}
      />
      <ScrollView contentContainerStyle={{ padding: 24, paddingTop: 16 }}>
        {events.map((event) => (
          <View
            key={event.id}
            style={{
              backgroundColor: Colors.primary50,
              borderRadius: 32,
              marginBottom: 32,
              padding: 20,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Image
              source={event.image}
              style={{
                width: "100%",
                height: 160,
                borderRadius: 24,
                marginBottom: 16,
                resizeMode: "cover",
              }}
            />
            <Text
              style={{
                ...Typography.styles.subtitle,
                color: Colors.textPrimary,
                marginBottom: 8,
              }}
            >
              {event.title}
            </Text>
            <TouchableOpacity
              onPress={() => handleDetail(event.id)}
              style={{
                alignSelf: "flex-start",
                backgroundColor: Colors.primary,
                borderRadius: 12,
                paddingHorizontal: 14,
                paddingVertical: 4,
                marginTop: 2,
              }}
            >
              <Text
                style={{ ...Typography.styles.body, color: Colors.textPrimary }}
              >
                See Detail
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
