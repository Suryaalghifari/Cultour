import BottomNavBar from "@/components/BottemNavbar";
import DashboardHeader from "@/components/DashboardHeader";
import { Stack, usePathname } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function DashboardLayout() {
  const pathname = usePathname();
  let active = "home";

  if (pathname.includes("/place")) active = "place";
  else if (pathname.includes("/event") || pathname.includes("/crudEvent"))
    active = "event";
  else if (pathname.includes("/profile")) active = "profile";

  const hideUI =
    pathname.includes("/place/") ||
    pathname.includes("/event/") ||
    pathname.includes("/chat") ||
    pathname.includes("/discusion");
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
