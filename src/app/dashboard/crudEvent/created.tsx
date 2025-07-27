import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function IdentityVerificationPage() {
  const [fullName, setFullName] = useState("");
  const sampleIdImage = require("@/assets/images/profile/ktp.png"); // ganti dengan file Anda

  const [agreements, setAgreements] = useState({
    docValid: true,
    usageConsent: true,
    noFalseInfo: true,
    termsAccepted: true,
  });

  const handleSave = () => {
    if (!fullName.trim()) {
      alert("Please fill in your full name.");
      return;
    }

    console.log("Verifikasi dikirim:", {
      fullName,
      agreements,
      eventId,
    });

    router.push(`/dashboard/crudEvent/detail/${eventId}`);
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 40 }}>
        {/* Title & Intro */}
        <Text className="text-xl font-bold text-[#1A1A1A] mb-2">
          Identity Verification
        </Text>
        <Text className="text-sm text-[#444] mb-6">
          To validate the event creator as a verified local by submitting a form
          of identity. You can upload a valid form of identification such as a
          National ID (KTP), Driver’s License (SIM), or Passport.
        </Text>

        {/* Full Name */}
        <Text className="mb-1 text-[#1A1A1A] font-semibold">Full Name</Text>
        <TextInput
          value={fullName}
          onChangeText={setFullName}
          placeholder="Your Full Name"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-5"
        />

        {/* Upload ID */}
        <Text className="mb-2 text-[#1A1A1A] font-semibold">
          Upload ID Document
        </Text>
        <Image
          source={sampleIdImage}
          className="w-full h-32 rounded-lg mb-5"
          resizeMode="cover"
        />

        {/* Agreements */}
        <View className="space-y-3 mb-8">
          <Text className="text-sm text-[#1A1A1A]">
            ✅ I confirm that the uploaded identity document belongs to me and
            is valid.
          </Text>
          <Text className="text-sm text-[#1A1A1A]">
            ✅ I agree that the platform may use my information solely for
            identity verification purposes.
          </Text>
          <Text className="text-sm text-[#1A1A1A]">
            ✅ I understand that submitting false or misleading information may
            result in the suspension of my account.
          </Text>
          <Text className="text-sm text-[#1A1A1A]">
            ✅ I have read and agree to the [Terms & Conditions] and [Privacy
            Policy].
          </Text>
        </View>

        {/* Save Button */}
        <TouchableOpacity
          onPress={handleSave}
          className="bg-[#F3DDBF] py-3 rounded-xl items-center"
        >
          <Text className="text-base font-semibold text-[#1A1A1A]">Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
