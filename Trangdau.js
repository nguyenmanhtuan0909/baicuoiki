import React from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

const MapScreen = ({ navigation }) => {
  const [region, setRegion] = React.useState({
    latitude: 21.0285,
    longitude: 105.8542,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  return (
    <View style={styles.container}>
      {/* Thanh công cụ */}
      <View style={styles.toolbar}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Caidat")}
        >
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>Hà Nội</Text>
          <Image
            source={require('../Busapp/Image/Co.png')}
            style={styles.flagIcon}
          />
        </View>

        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="heart-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Thanh tìm kiếm */}
      <View style={styles.searchContainer}>
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
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
      >
        <Marker
          coordinate={{ latitude: 21.0285, longitude: 105.8542 }}
          title="Hà Nội"
          description="Thủ đô của Việt Nam"
        />
      </MapView>

      {/* Thanh điều hướng phía dưới */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('Timduong')}
        >
          <Image source={require('../Busapp/Image/Bus.png')} style={styles.icon} />
        </TouchableOpacity>

        <View style={styles.separator} />

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('AnotherScreen')} // Thay 'AnotherScreen' bằng màn hình bạn muốn điều hướng
        >
          <Image source={require('../Busapp/Image/Rao.png')} style={styles.icon} />
        </TouchableOpacity>
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
  searchInput: {
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
  },
  map: {
    flex: 1,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  iconContainer: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  separator: {
    width: 1,
    height: 30,
    backgroundColor: '#D3D3D3',
  },
});

export default MapScreen;
