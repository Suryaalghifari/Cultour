import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function DetailCreatedEventPage() {
  const { eventId } = useLocalSearchParams<{ eventId: string }>();
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Dummy data sementara
  const event = {
    id: eventId,
    title: "Festival Budaya Nusantara",
    description:
      "Festival Budaya Nusantara adalah perayaan keberagaman budaya Indonesia ...",
    startDate: "2025/08/10",
    endDate: "2025/08/10",
    startTime: "10:00 WIB",
    endTime: "18:00 WIB",
    province: "West Java",
    city: "Bandung",
    image: require("@/assets/images/event/angklung.png"),
  };

  const handleDelete = () => {
    // TODO: delete event dari Supabase atau state global
    console.log("Deleted event:", eventId);
    setShowDeleteModal(false);
    router.replace("/dashboard/event");
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 80 }}>
        {/* Banner success + Delete */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-base font-semibold text-green-700">
            Your event has been created!
          </Text>
          <TouchableOpacity
            onPress={() => setShowDeleteModal(true)}
            className="bg-[#F3DDBF] px-4 py-2 rounded-xl"
          >
            <Text className="text-sm font-semibold text-[#1A1A1A]">Delete</Text>
          </TouchableOpacity>
        </View>

        {/* Card */}
        <View className="bg-[#F3DDBF] p-4 rounded-2xl mb-4">
          <Image
            source={event.image}
            className="w-full h-40 rounded-xl mb-3"
            resizeMode="cover"
          />
          <Text className="text-lg font-bold text-[#1A1A1A] mb-1">
            {event.title}
          </Text>
          <Text className="text-sm text-[#555] mb-2">
            📍 {event.city}, {event.province}
          </Text>
        </View>

        {/* Description */}
        <Text className="text-base font-semibold text-[#1A1A1A] mb-1">
          Description
        </Text>
        <Text className="text-sm text-[#333] mb-4">{event.description}</Text>

        {/* Schedule */}
        <Text className="text-base font-semibold text-[#1A1A1A] mb-1">
          Schedule
        </Text>
        <Text className="text-sm text-[#333]">
          Start Date & Time: {event.startDate} – {event.startTime}
        </Text>
        <Text className="text-sm text-[#333] mb-6">
          End Date & Time: {event.endDate} – {event.endTime}
        </Text>

        {/* Action buttons */}
        <View className="flex-row justify-between space-x-4">
          <TouchableOpacity className="flex-1 bg-[#F3DDBF] py-3 rounded-xl items-center">
            <Text className="text-sm font-semibold text-[#1A1A1A]">Ask AI</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-[#F3DDBF] py-3 rounded-xl items-center">
            <Text className="text-sm font-semibold text-[#1A1A1A]">
              Discussion
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Delete Modal */}
      <Modal transparent visible={showDeleteModal} animationType="fade">
        <View className="flex-1 justify-center items-center bg-black/30 px-6">
          <View className="bg-[#37705D] w-full p-6 rounded-xl items-center">
            <Text className="text-white text-lg font-semibold mb-4">
              Delete Event?
            </Text>
            <View className="flex-row space-x-4">
              <TouchableOpacity
                onPress={() => setShowDeleteModal(false)}
                className="bg-[#F3DDBF] px-4 py-2 rounded-lg"
              >
                <Text className="text-[#1A1A1A] font-semibold">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleDelete}
                className="bg-[#F3DDBF] px-4 py-2 rounded-lg"
              >
                <Text className="text-[#1A1A1A] font-semibold">Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
