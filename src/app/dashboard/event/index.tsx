import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const EventScreen = () => {
  const events = [
    {
      id: 1,
      title: "Asia Afrika Festival",
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Angklung Pride",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#E6C68A" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C5F5D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Event</Text>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>Create Event</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {events.map((event) => (
          <View key={event.id} style={styles.eventCard}>
            <Image source={{ uri: event.image }} style={styles.eventImage} />
            <Text style={styles.eventTitle}>{event.title}</Text>
            <TouchableOpacity style={styles.detailButton}>
              <Text style={styles.detailButtonText}>See Detail</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="#2C5F5D" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="grid-outline" size={24} color="#2C5F5D" />
          <Text style={styles.navText}>Place</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <View style={styles.activeNavBackground}>
            <Ionicons name="calendar" size={24} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#2C5F5D" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6C68A",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#E6C68A",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2C5F5D",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C2C2C",
  },
  createButton: {
    backgroundColor: "#D4B574",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  createButtonText: {
    color: "#2C2C2C",
    fontWeight: "600",
    fontSize: 14,
  },
  content: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  eventCard: {
    backgroundColor: "#E6C68A",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eventImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2C2C2C",
    marginBottom: 15,
  },
  detailButton: {
    backgroundColor: "#D4B574",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    alignSelf: "flex-start",
  },
  detailButtonText: {
    color: "#2C2C2C",
    fontWeight: "600",
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#E6C68A",
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  activeNavItem: {
    position: "relative",
  },
  activeNavBackground: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#2C5F5D",
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#2C5F5D",
    marginTop: 4,
    fontWeight: "500",
  },
});

export default EventScreen;
