// src/app/auth/register.tsx

import CustomButton from "@/components/atoms/Button";
import { Typography } from "@/constants/Typography";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleContinue = () => {
    // TODO: implement register logic
  };

  const handleGoogleContinue = () => {
    // TODO: implement register with Google
  };

  const handleLogin = () => {
    // TODO: navigate to login page
  };

  return (
    <ScrollView
      className="flex-1 bg-[#F8F5ED] px-6"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className="flex-1 justify-center">
        {/* Logo Section */}
        <View className="items-center">
          <Image
            source={require("@/assets/images/logoSplash.png")}
            style={{ width: 263, height: 263 }}
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text
          className="mb-8 text-[#1A1A1A]"
          style={[Typography.styles.title, { textAlign: "left" }]}
        >
          Sign Up
        </Text>

        {/* Email Input */}
        <View className="mb-6">
          <Text className="mb-2 text-[#1A1A1A]" style={Typography.styles.body}>
            Email
          </Text>
          <View className="flex-row items-center border-b border-[#E0E0E0] py-3">
            <Icon
              icon="mdi:at"
              width={20}
              height={20}
              color="#666"
              className="mr-3"
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder=""
              className="flex-1 text-base text-[#1A1A1A]"
            />
          </View>
        </View>

        {/* Password Input */}
        <View className="mb-8">
          <Text className="mb-2 text-[#1A1A1A]" style={Typography.styles.body}>
            Password
          </Text>
          <View className="flex-row items-center border-b border-[#E0E0E0] py-3">
            <Icon
              icon="mdi:lock"
              width={20}
              height={20}
              color="#666"
              className="mr-3"
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholder=""
              className="flex-1 text-base text-[#1A1A1A]"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
                width={20}
                height={20}
                color="#666"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Disclaimer */}
        <Text
          className="text-[#666] text-sm mb-8 leading-5"
          style={Typography.styles.body}
        >
          By signing up, you've agree to our{" "}
          <Text className="text-blue-700">terms and conditions</Text> and{" "}
          <Text className="text-blue-700">Privacy Policy</Text>.
        </Text>

        {/* Buttons */}
        <CustomButton
          label="Continue"
          onPress={handleContinue}
          className="w-[197px] h-[32px] mb-4 self-center"
        />
        <CustomButton
          label="Continue with Google"
          onPress={handleGoogleContinue}
          className="w-[197px] h-[32px] mb-4 self-center"
        />

        {/* Login Link */}
        <View className="items-center">
          <Text className="text-[#666] text-sm">
            Joined us before?{" "}
            <Text className="text-blue-700" onPress={handleLogin}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
