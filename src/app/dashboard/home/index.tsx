import { events } from "@/api/data/events";
import { getPlaceById, Place, places } from "@/api/data/places";
import Colors from "@/constants/color";
import { Typography } from "@/constants/Typography";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const router = useRouter();
  const trendingEvents = events.filter(
    (event) => event.placeId === "1" || event.placeId === "2"
  );

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      {/* Section: All Events */}
      <View className="px-6 mt-6">
        <Text className="text-[#1A1A1A] mb-4" style={Typography.styles.title}>
          All Events
        </Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={events} // 🔥 langsung ambil semua event
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 16 }}
          renderItem={({ item }) => {
            const place = getPlaceById(item.placeId);
            return (
              <TouchableOpacity
                className="w-72 bg-[#F3DDBF] rounded-2xl p-3"
                onPress={() => {
                  // TODO: navigate to event detail
                }}
              >
                <Image
                  source={item.image}
                  className="w-full h-40 rounded-xl mb-3"
                  resizeMode="cover"
                />
                <Text
                  className="text-[#1A1A1A] mb-1"
                  style={Typography.styles.subtitle}
                >
                  {item.title}
                </Text>
                <Text className="text-sm text-[#1A1A1A] opacity-70">
                  📍 {place?.name}, {place?.province}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Section: Place Recommendation */}
      <View className="px-6 mt-10">
        <Text className="text-[#1A1A1A] mb-4" style={Typography.styles.title}>
          Place Recommendation
        </Text>

        {places.map((place: Place) => (
          <View key={place.id} className="flex-row items-center mb-4">
            <Image
              source={place.image}
              className="w-[72px] h-[72px] rounded-xl mr-3 border"
              style={{
                backgroundColor: Colors.primary50,
                borderColor: Colors.primary,
              }}
              resizeMode="cover"
            />

            <TouchableOpacity
              className="flex-1 flex-row items-center rounded-2xl py-4 px-5 shadow-sm min-h-[72px]"
              style={{
                backgroundColor: Colors.primary50,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.08,
                shadowRadius: 4,
                elevation: 2,
              }}
              onPress={() => {
                // Ganti path ke rute yang benar
                router.push(`/dashboard/event/${place.id}`);
              }}
            >
              <View className="flex-1">
                <Text
                  className="text-[#1A1A1A]"
                  style={Typography.styles.subtitle}
                >
                  {place.name}
                </Text>
                <Text
                  className="text-[#1A1A1A] opacity-70"
                  style={Typography.styles.body}
                >
                  {place.province}
                </Text>
              </View>
              <Text className="text-2xl text-[#1A1A1A] font-bold opacity-50 ml-3">
                {">"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
