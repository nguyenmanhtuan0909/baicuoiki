import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const RouteFinderScreen = ({ navigation }) => { // Nhận navigation từ props
  const [region, setRegion] = React.useState({
    latitude: 20.9807, // Vĩ độ của vị trí ví dụ
    longitude: 105.7876, // Kinh độ của vị trí ví dụ
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  return (
    <View style={styles.container}>
      {/* Thanh tìm đường */}
      <View style={styles.searchContainer}>
        <Text style={styles.title}>Tìm đường</Text>

        <View style={styles.inputRow}>
          <Image source={require('../Busapp/Image/Ongnhom.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Nhập địa điểm xuất phát"
            placeholderTextColor="#FFFFFF"
          />
        </View>

        <View style={styles.inputRow}>
          <Image source={require('../Busapp/Image/Diachi.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Nhập địa điểm đến"
            placeholderTextColor="#FFFFFF"
          />
        </View>

        <Text style={styles.note}>Đi tối đa 1 chuyến</Text>

        {/* Nút Tìm đường */}
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => navigation.navigate('Quydao')} // Điều hướng đến trang "Destination"
        >
          <Text style={styles.searchButtonText}>Tìm đường</Text>
        </TouchableOpacity>
      </View>

      {/* Bản đồ */}
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        <Marker
          coordinate={{ latitude: 20.9807, longitude: 105.7876 }}
          title="Trường Đại học Công nghệ Giao thông Vận tải"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: '#1E90FF',
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8A2BE2',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
  },
  note: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 15,
  },
  searchButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#1E90FF',
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
  },
});

export default RouteFinderScreen;
