import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const RouteDetailsScreen = () => {
  // Tọa độ các trạm dừng
  const stations = [
    { id: 1, title: 'Trạm dừng An Thới Đông', coordinate: { latitude: 21.028511, longitude: 105.804817 } },
    { id: 2, title: 'Trường tiểu học An Thới Đông', coordinate: { latitude: 21.030711, longitude: 105.807017 } },
    { id: 3, title: 'Trạm dừng An Thới Đông', coordinate: { latitude: 21.032511, longitude: 105.809217 } },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Bản đồ */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 21.028511, // Vị trí ban đầu của bản đồ
          longitude: 105.804817,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* Các Marker cho từng trạm dừng */}
        {stations.map((station) => (
          <Marker
            key={station.id}
            coordinate={station.coordinate}
            title={station.title}
          />
        ))}
      </MapView>

      {/* Thông tin tuyến */}
      <View style={styles.routeInfoContainer}>
        <View style={styles.routeBadge}>
          <Text style={styles.routeNumber}>122</Text>
        </View>
        <View style={styles.routeDescription}>
          <Text style={styles.routeTitle}>Trạm dừng xe bus ở Đại Học Hà Nội</Text>
        </View>
      </View>

      {/* Lựa chọn tab Trạm dừng / Thông tin */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Trạm dừng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Thông tin</Text>
        </TouchableOpacity>
      </View>

      {/* Thời gian các trạm */}
      <View style={styles.timeContainer}>
        {['05:30', '05:40', '05:50', '06:00'].map((time, index) => (
          <TouchableOpacity key={index} style={styles.timeButton}>
            <Text style={styles.timeText}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Danh sách trạm dừng */}
      <View style={styles.stationList}>
        {stations.map((station) => (
          <View key={station.id} style={styles.stationItem}>
            <Text style={styles.stationName}>{station.title}</Text>
            <Text style={styles.stationDuration}>1 phút</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  map: {
    height: 200,
    width: '100%',
  },
  routeInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    marginTop: -20,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  routeBadge: {
    backgroundColor: '#6A5ACD',
    borderRadius: 5,
    padding: 10,
  },
  routeNumber: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  routeDescription: {
    marginLeft: 10,
  },
  routeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  tabButton: {
    padding: 10,
  },
  tabText: {
    fontSize: 16,
    color: '#6A5ACD',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  timeButton: {
    backgroundColor: '#6A5ACD',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  stationList: {
    padding: 10,
  },
  stationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  stationName: {
    fontSize: 16,
  },
  stationDuration: {
    color: '#888',
  },
});

export default RouteDetailsScreen;
