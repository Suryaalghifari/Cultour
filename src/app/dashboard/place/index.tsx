import Colors from "@/constants/color";
import { Typography } from "@/constants/Typography";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const places = [
  {
    id: "1",
    name: "Bandung",
    province: "Jawa Barat",
    image: require("@/assets/images/place/Bandung.png"),
  },
  {
    id: "2",
    name: "Jakarta",
    province: "DKI Jakarta",
    image: require("@/assets/images/place/Jakarta.png"),
  },
  {
    id: "3",
    name: "DIY Yogyakarta",
    province: "DIY Yogyakarta",
    image: require("@/assets/images/place/Jogja.png"),
  },
];

export default function PlaceList() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text className="mb-4 text-[#1A1A1A]" style={Typography.styles.title}>
          Place
        </Text>

        {places.map((place) => (
          <View key={place.name} className="flex-row items-center mb-6">
            <Image
              source={place.image}
              className="w-[72px] h-[72px] rounded-xl mr-3 border"
              style={{
                backgroundColor: Colors.primary50,
                borderColor: Colors.primary,
              }}
              resizeMode="cover"
            />

            <View
              className="flex-1 flex-row items-center rounded-2xl py-4 px-5 shadow-sm min-h-[72px]"
              style={{
                backgroundColor: Colors.primary50,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.08,
                shadowRadius: 4,
                elevation: 2,
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
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
