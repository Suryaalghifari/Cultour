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

export default function ChatbotEventPage() {
  const router = useRouter();

  // State contoh pesan
  const [messages, setMessages] = useState([
    {
      id: "1",
      from: "user",
      text: "What is Asia Afrika Festival ?",
      avatar: "https://randomuser.me/api/portraits/men/40.jpg", // Contoh avatar user
    },
    {
      id: "2",
      from: "bot",
      text: "Perayaan Sejarah Konferensi Asia-Afrika Dengan Parade Budaya, Pertunjukan Seni Tradisional Dan Kontemporer Sepanjang Jalan Asia-Afrika, Menghadirkan Rasa Persatuan Antanegara Asia Dan Afrika.",
      avatar: require("@/assets/bot-avatar.png"), // Ganti dengan path bot avatar kamu
      name: "Cultur",
    },
  ]);
  const [input, setInput] = useState("");

  // Handler tombol back
  const handleBack = () => router.back();

  // Handler send chat
  const handleSend = () => {
    if (!input.trim()) return;
    // TODO: Ganti ini untuk kirim ke API chatbot
    setMessages([
      ...messages,
      {
        id: String(Date.now()),
        from: "user",
        text: input,
        avatar: "https://randomuser.me/api/portraits/men/40.jpg", // avatar user
      },
    ]);
    setInput("");
  };

  return (
    <View className="flex-1 bg-[#E8D5B7]">
      {/* Header */}
      <View className="flex-row items-center px-5 pt-12 pb-5">
        <TouchableOpacity
          onPress={handleBack}
          className="w-10 h-10 rounded-full bg-primary/50 items-center justify-center border border-black"
        >
          <Icon icon="mdi:arrow-left" width={24} height={24} color="#1A1A1A" />
        </TouchableOpacity>
        <View className="flex-1 items-center -ml-10">
          <Text className="text-xl font-bold text-dark font-poppins-bold">
            Chatbot
          </Text>
        </View>
      </View>

      {/* Chat Area */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1 bg-white rounded-t-3xl pt-8 px-5"
        keyboardVerticalOffset={80}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {messages.map((msg) =>
            msg.from === "user" ? (
              <View key={msg.id} className="flex-row justify-end mb-3">
                <View className="max-w-[70%] flex-row items-end">
                  <View className="bg-[#D2E3DB] px-4 py-2 rounded-xl rounded-br-none">
                    <Text className="text-dark">{msg.text}</Text>
                  </View>
                  <Image
                    source={{ uri: msg.avatar }}
                    className="w-8 h-8 rounded-full ml-2"
                  />
                </View>
              </View>
            ) : (
              <View key={msg.id} className="flex-row items-end mb-3">
                <Image
                  source={msg.avatar}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <View className="max-w-[70%]">
                  <Text className="text-xs text-[#666] mb-1">
                    {msg.name || "Bot"}
                  </Text>
                  <View className="bg-[#99B7A5] px-4 py-2 rounded-xl rounded-tl-none">
                    <Text className="text-white">{msg.text}</Text>
                  </View>
                </View>
              </View>
            )
          )}
        </ScrollView>

        {/* Input Chat */}
        <View className="flex-row items-center bg-[#F3DDBF] rounded-xl px-4 py-3 mb-3 mt-2">
          <TextInput
            className="flex-1 text-dark"
            value={input}
            onChangeText={setInput}
            placeholder="Chat Again"
            placeholderTextColor="#888"
            style={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}
            // onSubmitEditing={handleSend}
          />
          <TouchableOpacity onPress={handleSend} className="ml-2" hitSlop={10}>
            <Icon icon="mdi:send" width={24} height={24} color="#1A1A1A" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
