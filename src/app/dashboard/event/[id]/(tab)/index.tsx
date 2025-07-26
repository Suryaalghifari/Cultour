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
  <View className="bg-[#F0E6D2] rounded-2xl p-5 mb-5 shadow-sm">
    <Image
      source={event.image}
      className="w-full h-40 rounded-xl mb-4"
      resizeMode="cover"
    />
    <Text className="text-lg font-semibold text-dark mb-4 font-poppins-semibold">
      {event.title}
    </Text>
    <TouchableOpacity
      onPress={() => onSeeDetail(event.id)}
      className="bg-primary/50 px-4 py-2 rounded-xl self-start"
      activeOpacity={0.7}
    >
      <Text className="text-[#8B4513] text-sm font-semibold font-poppins-medium">
        See Detail
      </Text>
    </TouchableOpacity>
  </View>
);

export default function PlaceEventPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const place = getPlaceById(id as string);
  const filteredEvents = events.filter((e) => e.placeId === id);

  // Ubah handleBack jadi tes log/alert
  const handleBack = () => {
    Alert.alert("Back pressed!", "Ini tes event onPress");
    router.replace("/dashboard/home");
  };

  const handleSeeDetail = (eventId: string) => {
    Alert.alert("Event detail", `Event ID: ${eventId}`);
    // router.push(`/event/${eventId}`);
  };

  return (
    <View className="flex-1 bg-backgroundColor: Colors.primary">
      {/* DEBUG: background merah biar jelas */}
      <View className="flex-row items-center px-5 pt-12 pb-5 bg-backgroundColor: Colors.primary">
        <TouchableOpacity
          onPress={handleBack}
          className="w-10 h-10 rounded-full bg-primary/50 items-center justify-center border border-black"
          style={{ zIndex: 10, elevation: 10 }} // DEBUG: pastikan di atas
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
