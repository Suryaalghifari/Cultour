import { Stack } from "expo-router";

export default function PlaceLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#EEC887" },
      }}
    >
      <Stack.Screen name="(tab)" />
    </Stack>
  );
}
