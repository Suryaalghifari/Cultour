import CustomSplashScreen from "@/components/CustomSplashScreen";
import Colors from "@/constants/color";
import { router } from "expo-router";

export default function Index() {
  return (
    <CustomSplashScreen
      onAnimationComplete={() => router.replace("/dashboard/home")} // 👈 langsung navigasi ke halaman
      imageSource={require("@/assets/images/logoSplash.png")}
      backgroundColor={Colors.primary50}
      duration={2000}
      size={150}
    />
  );
}
