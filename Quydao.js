import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

const MapScreen = ({ navigation }) => { // Nhận navigation từ props
  const [region, setRegion] = React.useState({
    latitude: 21.0285, // Vĩ độ của Hà Nội
    longitude: 105.8542, // Kinh độ của Hà Nội
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  return (
    <View style={styles.container}>
      {/* Thanh công cụ */}
      <View style={styles.toolbar}>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>Hà Nội</Text>
          <Image
            source={require('../Busapp/Image/Co.png')} // Đường dẫn tới ảnh cờ Việt Nam
            style={styles.flagIcon}
          />
        </View>

        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="heart-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Thanh tìm kiếm */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#A9A9A9" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm địa chỉ"
          placeholderTextColor="#A9A9A9"
        />
      </View>

      {/* Bản đồ */}
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        <Marker
          coordinate={{ latitude: 21.0285, longitude: 105.8542 }}
          title="Hà Nội"
          description="Thủ đô của Việt Nam"
        />
      </MapView>

      {/* Khung nhập địa chỉ và nút */}
      <View style={styles.bottomPanel}>
        <TextInput
          style={styles.addressInput}
          placeholder="54, Triều Khúc, Thanh Xuân, Hà Nội"
          placeholderTextColor="#A9A9A9"
        />
        <TextInput
          style={styles.addressInput}
          placeholder="Đại học công nghệ GTVT"
          placeholderTextColor="#A9A9A9"
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.detailButton}>
            <Text style={styles.buttonText}>Chi Tiết</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate('Tuyenxe')} // Điều hướng đến trang "StartJourney"
          >
            <Text style={styles.buttonText}>Khởi Hành</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1E90FF',
    paddingTop: 40,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  menuButton: {
    padding: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  locationText: {
    fontSize: 16,
    marginRight: 5,
    color: '#000',
  },
  flagIcon: {
    width: 20,
    height: 15,
  },
  favoriteButton: {
    padding: 10,
  },
  searchContainer: {
    position: 'absolute',
    top: 80,
    left: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: 12,
  },
  searchInput: {
    height: 40,
    paddingLeft: 40,
    paddingRight: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
  },
  map: {
    flex: 1,
  },
  bottomPanel: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  addressInput: {
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailButton: {
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  startButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MapScreen;
