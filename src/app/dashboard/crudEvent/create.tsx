import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CreateEventPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  const sampleImage = require("@/assets/images/event/angklung.png");

  const handleNext = () => {
    const newEvent = {
      title,
      description,
      startDate,
      endDate,
      startTime,
      endTime,
      province,
      city,
      image: sampleImage,
    };

    console.log("Created Event:", newEvent);

    router.push({
      pathname: "/dashboard/crudEvent/created",
      params: { eventId: "dummy123" },
    });
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 40 }}>
        {/* Event Title */}
        <Text className="mb-1 text-[#1A1A1A] font-semibold">Event Title</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Event Title"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />

        {/* Description */}
        <Text className="mb-1 text-[#1A1A1A] font-semibold">
          Event Description
        </Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Event Description"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />

        {/* Dates */}
        <View className="flex-row justify-between">
          <View className="w-[48%]">
            <Text className="mb-1 text-[#1A1A1A] font-semibold">
              Start Date
            </Text>
            <TextInput
              value={startDate}
              onChangeText={setStartDate}
              placeholder="YYYY/MM/DD"
              className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />
          </View>
          <View className="w-[48%]">
            <Text className="mb-1 text-[#1A1A1A] font-semibold">End Date</Text>
            <TextInput
              value={endDate}
              onChangeText={setEndDate}
              placeholder="YYYY/MM/DD"
              className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />
          </View>
        </View>

        {/* Times */}
        <View className="flex-row justify-between">
          <View className="w-[48%]">
            <Text className="mb-1 text-[#1A1A1A] font-semibold">
              Start Time
            </Text>
            <TextInput
              value={startTime}
              onChangeText={setStartTime}
              placeholder="10:00 WIB"
              className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />
          </View>
          <View className="w-[48%]">
            <Text className="mb-1 text-[#1A1A1A] font-semibold">End Time</Text>
            <TextInput
              value={endTime}
              onChangeText={setEndTime}
              placeholder="18:00 WIB"
              className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />
          </View>
        </View>

        {/* Province */}
        <Text className="mb-1 text-[#1A1A1A] font-semibold">Province</Text>
        <TextInput
          value={province}
          onChangeText={setProvince}
          placeholder="e.g. West Java"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />

        {/* City */}
        <Text className="mb-1 text-[#1A1A1A] font-semibold">City</Text>
        <TextInput
          value={city}
          onChangeText={setCity}
          placeholder="e.g. Bandung"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-6"
        />

        {/* Image Preview */}
        <Text className="mb-2 text-[#1A1A1A] font-semibold">
          Supporting Image
        </Text>
        <Image
          source={sampleImage}
          className="w-full h-40 rounded-lg mb-6"
          resizeMode="cover"
        />

        {/* Next Button */}
        <TouchableOpacity
          onPress={handleNext}
          className="bg-[#F3DDBF] py-3 rounded-xl items-center"
        >
          <Text className="text-base font-semibold text-[#1A1A1A]">Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
