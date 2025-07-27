"use client";

import { events } from "@/api/data/events";
import { getPlaceById } from "@/api/data/places";
import GlobalButton from "@/components/atoms/Button";
import { Typography } from "@/constants/Typography";
import { Icon } from "@iconify/react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function EventDetailPage() {
  const { id, eventId } = useLocalSearchParams<{
    id: string;
    eventId: string;
  }>();
  const router = useRouter();

  const event = events.find((e) => e.id === eventId);
  const place = getPlaceById(id as string);

  if (!event || !place) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Event not found.</Text>
      </View>
    );
  }

  // --- Handler Button ---
  const handleBack = () => {
    router.replace("/dashboard/home");
  };

  const handleAskAI = () => {
    // TODO: Ganti route ini sesuai kebutuhan kamu
    router.push(`/dashboard/chat`);
    console.log("Ask AI pressed");
  };

  const handleDiscussion = () => {
    router.push(`/dashboard/discusion`);
    // TODO: Ganti route ini sesuai kebutuhan kamu
    // Misal: router.push(`/dashboard/event/${eventId}/discussion`);
    console.log("Discussion pressed");
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
            Detail Event
          </Text>
        </View>
      </View>

      {/* Content */}
      <View className="flex-1 bg-white rounded-t-3xl pt-8 px-5">
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Event Card */}
          <View className="bg-[#F3DDBF] rounded-2xl p-4 mb-6 items-center">
            <View className="w-72 bg-[#F3DDBF] rounded-2xl p-4">
              <Image
                source={event.image}
                className="w-full h-40 rounded-xl mb-3"
                resizeMode="cover"
              />
            </View>
            <Text
              className="text-lg font-semibold text-dark mb-1 text-left"
              style={Typography.styles.subtitle}
            >
              {event.title}
            </Text>
            <Text className="text-sm text-[#666] mb-3 text-lef">
              📍 {place.name}, {place.province}
            </Text>
          </View>

          {/* Description */}
          <View className="mb-5">
            <Text
              className="text-lg font-bold text-dark mb-1"
              style={Typography.styles.subtitle}
            >
              Description
            </Text>
            <Text
              className="text-sm text-[#1A1A1A]"
              style={Typography.styles.body}
            >
              {event.description ||
                "Perayaan sejarah Konferensi Asia-Afrika dengan parade budaya, pertunjukan seni tradisional dan kontemporer."}
            </Text>
          </View>

          {/* Schedule */}
          <View className="mb-8">
            <Text
              className="text-lg font-bold text-dark mb-2"
              style={Typography.styles.subtitle}
            >
              Schedule
            </Text>
            <Text
              className="text-sm text-dark font-semibold mb-1"
              style={Typography.styles.body}
            >
              Start Date & Time: 2025/08/10 - 10:00 WIB
            </Text>
            <Text
              className="text-sm text-dark font-semibold"
              style={Typography.styles.body}
            >
              End Date & Time: 2025/08/10 - 18:00 WIB
            </Text>
          </View>

          {/* Action Buttons */}
          <View className="flex-row justify-between">
            <View className="flex-1 mr-2">
              <GlobalButton
                label="Ask AI"
                onPress={handleAskAI} // <--- Call route di sini
                variant="primary"
                size="md"
                containerStyle={{ borderRadius: 16 }}
                textStyle={{ fontFamily: Typography.fontFamily.medium }}
              />
            </View>
            <View className="flex-1 ml-2">
              <GlobalButton
                label="Discussion"
                onPress={handleDiscussion} // <--- Call route di sini
                variant="primary"
                size="md"
                containerStyle={{ borderRadius: 16 }}
                textStyle={{ fontFamily: Typography.fontFamily.medium }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
