export const events = [
  {
    id: "e1",
    placeId: "1", // Jakarta
    title: "Festival Asia Afrika",
    description: "Menampilkan pertunjukan seni dan kuliner khas Bandung.",
    date: "2025-08-15",
    image: require("@/assets/images/event/asiaAfrika.png"),
  },
  {
    id: "e2",
    placeId: "3", // Bandung
    title: "Pasar Kreatif Bandung",
    description: "Event UMKM, musik, dan karya seni dari Jogja.",
    date: "2025-08-20",
    image: require("@/assets/images/event/angklung.png"),
  },
];

// ✅ Ambil semua event
export const getAllEvents = () => events;

// ✅ Ambil event berdasarkan ID (array)
export const getEventsByIds = (ids: string[]) => {
  return events.filter((event) => ids.includes(event.id));
};

// ✅ Ambil event berdasarkan placeId
export const getEventsByPlaceId = (placeId: string) => {
  return events.filter((event) => event.placeId === placeId);
};
