export interface Place {
  id: string;
  name: string;
  province: string;
  image: any;
}

// Data tempat
export const places: Place[] = [
  {
    id: "1",
    name: "Bandung",
    province: "Jawa Barat",
    image: require("@/assets/images/place/Bandung.png"),
  },
  {
    id: "2",
    name: "Jakarta",
    province: "DKI Jakarta",
    image: require("@/assets/images/place/Jakarta.png"),
  },
  {
    id: "3",
    name: "DIY Yogyakarta",
    province: "DIY Yogyakarta",
    image: require("@/assets/images/place/Jogja.png"),
  },
];

// Fungsi helper
export const getAllPlaces = () => places;

export const getPlaceById = (id: string) => {
  return places.find((place) => place.id === id);
};
