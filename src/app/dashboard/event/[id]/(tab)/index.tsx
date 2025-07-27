import { Icon } from "@iconify/react";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { events } from "@/api/data/events";
import { getPlaceById } from "@/api/data/places";
import GlobalButton from "@/components/atoms/Button";
import { Typography } from "@/constants/Typography";

// ----- Komponen EventCard -----
type EventType = {
  id: string;
  title: string;
  image: any;
  placeId: string;
};

const EventCard = ({
  event,
  onSeeDetail,
}: {
  event: EventType;
  onSeeDetail: (eventId: string) => void;
}) => (
  <View className="items-center mb-6">
    <View className="w-72 bg-[#F3DDBF] rounded-2xl p-4">
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
        onPress={() => onSeeDetail(event.id)}
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
);

// ----- Main Page -----
export default function PlaceEventPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const place = getPlaceById(id as string);
  const filteredEvents = events.filter((e) => e.placeId === id);

  // Handler tombol back
  const handleBack = () => {
    Alert.alert("Back pressed!", "Ini tes event onPress");
    router.replace("/dashboard/home");
  };

  // Handler tombol See Detail
  const handleSeeDetail = (eventId: string) => {
    const event = events.find((e) => e.id === eventId);
    if (!event) {
      Alert.alert("Event not found", `Event ID: ${eventId} tidak ditemukan`);
      return;
    }
    router.push(`/dashboard/event/${event.placeId}/detail/${eventId}`);
  };

  return (
    <View className="flex-1 bg-[#E8D5B7]">
      {/* Header */}
      <View className="flex-row items-center px-5 pt-12 pb-5">
        <TouchableOpacity
          onPress={handleBack}
          className="w-10 h-10 rounded-full bg-primary/50 items-center justify-center border border-black"
          style={{ zIndex: 10, elevation: 10 }}
        >
          <Icon icon="mdi:arrow-left" width={24} height={24} color="#1A1A1A" />
        </TouchableOpacity>
        <View className="flex-1 items-center -ml-10">
          <Text className="text-xl font-bold text-dark font-poppins-bold">
            Event
          </Text>
        </View>
      </View>

      {/* Content */}
      <View className="flex-1 bg-white rounded-t-3xl pt-8 px-5">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          {filteredEvents.length === 0 ? (
            <View className="items-center mt-20">
              <Text className="text-base text-[#666] font-poppins-regular">
                Belum ada event di tempat ini.
              </Text>
            </View>
          ) : (
            filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onSeeDetail={handleSeeDetail}
              />
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
}
