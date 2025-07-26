import GlobalButton from "@/components/atoms/Button";
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

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // TODO: implement login logic
  };

  const handleGoogleLogin = () => {
    // TODO: implement Google login
  };

  const handleRegister = () => {
    // TODO: navigate to register page
  };

  return (
    <ScrollView
      className="flex-1 bg-[#F8F5ED] px-6"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className="flex-1 justify-center">
        {/* Logo */}
        <View className="items-center mb-12">
          <Image
            source={require("@/assets/images/logoSplash.png")}
            style={{ width: 263, height: 263 }}
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text
          className="mb-8 text-[#333]"
          style={{ ...Typography.styles.title, textAlign: "left" }}
        >
          Login
        </Text>

        {/* Email Input */}
        <View className="mb-6">
          <Text className="mb-2 text-[#333]" style={Typography.styles.body}>
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
              className="flex-1 text-base text-[#333]"
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Password Input */}
        <View className="mb-8">
          <Text className="mb-2 text-[#333]" style={Typography.styles.body}>
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
              className="flex-1 text-base text-[#333]"
              placeholder="Enter your password"
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

        {/* Buttons */}
        <GlobalButton label="Login" onPress={handleLogin} className="mb-4" />
        <GlobalButton
          label="Login with Google"
          onPress={handleGoogleLogin}
          className="mb-8"
        />

        {/* Register link */}
        <View className="items-center">
          <Text className="text-[#666] text-sm">
            New here?{" "}
            <Text className="text-blue-700" onPress={handleRegister}>
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
