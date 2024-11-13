import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const CpNhtDLiu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Cập nhật dữ liệu</Text>
        </View>

        <Text style={styles.label}>Ngày cập nhật dữ liệu gần nhất</Text>

        <Text style={styles.date}>13/09/2023</Text>

        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateButtonText}>Cập nhật</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  content: {
    width: 330,
    height: 640,
    backgroundColor: "white",
    borderRadius: 40,
    alignSelf: "center",
  },
  header: {
    width: "100%",
    height: 63,
    backgroundColor: "#6c63ff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    color: "white",
  },
  label: {
    position: "absolute",
    top: 119,
    left: 38,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
  },
  date: {
    position: "absolute",
    top: 185,
    left: 71,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    color: "#6c63ff",
    fontSize: 24,
    letterSpacing: 3.2,
  },
  updateButton: {
    position: "absolute",
    top: 279,
    left: 83,
    width: 191,
    height: 54,
    borderRadius: 20,
    backgroundColor: "#6c63ff",
    justifyContent: "center",
    alignItems: "center",
  },
  updateButtonText: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    letterSpacing: 2.4,
  },
});

export default CpNhtDLiu;
