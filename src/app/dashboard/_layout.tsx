import BottomNavBar from "@/components/BottemNavbar";
import DashboardHeader from "@/components/DashboardHeader";
import { Stack, usePathname } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function DashboardLayout() {
  const pathname = usePathname();
  let active = "home";
  if (pathname.endsWith("/place")) active = "place";
  if (pathname.endsWith("/event")) active = "event";
  if (pathname.endsWith("/profile")) active = "profile";

  const hideUI = pathname.includes("/place/") || pathname.includes("/event/");

  const [search, setSearch] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {!hideUI && (
        <DashboardHeader
          logoSource={require("@/assets/images/logoSplash.png")}
          searchValue={search}
          setSearchValue={setSearch}
          onSearch={() => {}}
          onNotifPress={() => {}}
        />
      )}
      <Stack screenOptions={{ headerShown: false }} />
      {!hideUI && <BottomNavBar active={active} />}
    </View>
  );
}
