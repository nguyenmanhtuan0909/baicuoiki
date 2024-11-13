import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, IconButton, List, Divider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Caidat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Dangnhap")}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Đăng Nhập
        </Button>

        <View style={styles.registerContainer}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Dangky")}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Đăng Ký
          </Button>
          <IconButton
            icon={() => <MaterialIcons name="favorite-border" size={24} color="black" />}
            onPress={() => navigation.navigate("Thongbao")}
            style={styles.favoriteIcon}
          />
        </View>
      </View>

      {/* List Section */}
      <List.Section>
        <List.Item
          title="Thông báo"
          left={() => <MaterialIcons name="notifications" size={24} />}
          onPress={() => navigation.navigate("Thongbao")}
        />
        <Divider />

        <Text style={styles.sectionTitle}>Chức năng</Text>

        <List.Item
          title="Tìm địa điểm"
          left={() => <MaterialIcons name="location-on" size={24} />}
          onPress={() => navigation.navigate("Diachi")}
        />
        <List.Item
          title="Tìm chuyến"
          left={() => <MaterialIcons name="directions" size={24} />}
          onPress={() => navigation.navigate("Timchuyen")}
        />
        <List.Item
          title="Tra cứu"
          left={() => <MaterialIcons name="search" size={24} />}
          onPress={() => navigation.navigate("Tra")}
        />
        <List.Item
          title="Cập nhật"
          left={() => <MaterialIcons name="update" size={24} />}
          onPress={() => navigation.navigate("Capnhat")}
        />

        <Divider />

        <Text style={styles.sectionTitle}>Phản hồi</Text>

        <List.Item
          title="Góp ý"
          left={() => <MaterialIcons name="feedback" size={24} />}
          onPress={() => navigation.navigate("Gopy")}
        />
        <List.Item
          title="Đánh giá"
          left={() => <MaterialIcons name="star" size={24} />}
          onPress={() => navigation.navigate("Danhgia")}
        />
        <List.Item
          title="Thông tin"
          left={() => <MaterialIcons name="info" size={24} />}
          onPress={() => navigation.navigate("Thongtin")}
        />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 16,
    backgroundColor: "#6c63ff",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 8,
    width: 150,
  },
  buttonLabel: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  favoriteIcon: {
    marginLeft: 10, // Thêm khoảng cách giữa nút "Đăng Ký" và biểu tượng trái tim
  },
  sectionTitle: {
    padding: 8,
    fontWeight: "bold",
  },
});

export default Caidat;
