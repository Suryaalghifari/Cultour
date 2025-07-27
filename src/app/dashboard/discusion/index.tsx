"use client";

import { Icon } from "@iconify/react";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function DiscussionPage() {
  const router = useRouter();

  // Simulasi sudah join atau belum (bisa pakai role/user state)
  const [joined, setJoined] = useState(false);

  // Dummy discussion messages
  const [messages, setMessages] = useState([
    {
      id: "1",
      from: "user1",
      name: "Jane",
      text: "Hi!! This Event So Much Fun",
      avatar: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: "2",
      from: "user2",
      name: "Emily",
      text: "Where is Asia Afrika Festival ?",
      avatar: "https://randomuser.me/api/portraits/women/41.jpg",
    },
    {
      id: "3",
      from: "bot",
      name: "Cultour",
      text: "Bandung, Jawa Barat",
      avatar: null, // Nanti bisa pakai Icon atau SVG sebagai avatar Cultour
    },
  ]);
  const [input, setInput] = useState("");

  // Handle send message (jika sudah join)
  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      {
        id: String(Date.now()),
        from: "me",
        name: "You",
        text: input,
        avatar: "https://randomuser.me/api/portraits/men/40.jpg",
      },
    ]);
    setInput("");
  };

  return (
    <View className="flex-1 bg-[#E8D5B7]">
      {/* Header */}
      <View className="flex-row items-center px-5 pt-12 pb-5">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-primary/50 items-center justify-center border border-black"
        >
          <Icon icon="mdi:arrow-left" width={24} height={24} color="#1A1A1A" />
        </TouchableOpacity>
        <View className="flex-1 items-center -ml-10">
          <Text className="text-xl font-bold text-dark font-poppins-bold">
            Discussion
          </Text>
        </View>
      </View>

      {/* Optional: Judul Event (bisa props atau dummy) */}
      <View className="items-center">
        <Text className="text-lg font-bold mt-2 mb-4">
          Asia Afrika Festival
        </Text>
      </View>

      {/* Diskusi Area */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1 bg-white rounded-t-3xl pt-4 px-5"
        keyboardVerticalOffset={80}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: joined ? 80 : 20 }}
        >
          {messages.map((msg, i) =>
            msg.from === "bot" ? (
              <View
                key={msg.id}
                className="flex-row items-end mb-3 justify-end"
              >
                <View className="max-w-[70%] flex-row items-end">
                  <View className="bg-[#99B7A5] px-4 py-2 rounded-xl rounded-tl-none flex-row items-center">
                    <Text className="text-white mr-2">{msg.text}</Text>
                    <View
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 16,
                        backgroundColor: "#99B7A5",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        icon="ph:seal-question-fill"
                        color="#fff"
                        width={20}
                        height={20}
                      />
                    </View>
                  </View>
                </View>
              </View>
            ) : (
              <View key={msg.id} className="flex-row items-end mb-3">
                <Image
                  source={{ uri: msg.avatar }}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <View className="max-w-[70%]">
                  <Text className="text-xs text-[#666] mb-1">{msg.name}</Text>
                  <View className="bg-[#B8D1C2] px-4 py-2 rounded-xl rounded-tl-none">
                    <Text className="text-dark">{msg.text}</Text>
                  </View>
                </View>
              </View>
            )
          )}
        </ScrollView>

        {/* Read only mode (belum join) */}
        {!joined && (
          <View className="absolute bottom-8 left-0 right-0 items-center">
            <Text className="text-[#9C9C9C] mb-2">
              You only can see the discuss
            </Text>
            <TouchableOpacity
              className="bg-[#F3DDBF] px-5 py-2 rounded-xl"
              onPress={() => setJoined(true)}
            >
              <Text className="text-[#9C9C9C] font-semibold">
                Tap to Join Discussion
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Input Chat: Hanya muncul jika sudah join */}
        {joined && (
          <View className="flex-row items-center bg-[#F3DDBF] rounded-xl px-4 py-3 mb-3 mt-2 absolute bottom-0 left-0 right-0">
            <TextInput
              className="flex-1 text-dark"
              value={input}
              onChangeText={setInput}
              placeholder="Type your message..."
              placeholderTextColor="#888"
              style={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}
            />
            <TouchableOpacity
              onPress={handleSend}
              className="ml-2"
              hitSlop={10}
            >
              <Icon icon="mdi:send" width={24} height={24} color="#1A1A1A" />
            </TouchableOpacity>
          </View>
        )}
      </KeyboardAvoidingView>
    </View>
  );
}
