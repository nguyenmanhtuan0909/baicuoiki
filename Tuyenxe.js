import React from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BusRoutes = () => {
  const navigation = useNavigation();

  // Danh sách các tuyến xe và màn hình tương ứng
  const busRoutes = [
    { id: '110', name: 'Tuyến số 110', route: 'Cầu Kênh Lộ - Phước Lộc', time: '05:00 - 18:30', price: '6,000 VNĐ', screen: 'Tuyenxe110' },
    { id: '122', name: 'Tuyến số 122', route: 'Bến xe An Sương - Tân Quy', time: '04:45 - 19:53', price: '6,000 VNĐ', screen: 'Tuyenxe122' },
    { id: '126', name: 'Tuyến số 126', route: 'Bến xe Củ Chi - Cầu Phú Cường', time: '05:00 - 18:50', price: '6,000 VNĐ', screen: 'Tuyenxe126' },
    { id: '127', name: 'Tuyến số 127', route: 'Tam Thôn Hiệp - Bà Xán', time: '05:30 - 20:00', price: '6,000 VNĐ', screen: 'c' },
    { id: '128', name: 'Tuyến số 128', route: 'Bến xe Điện Biên - Trường An Nghĩa', time: '05:00 - 18:30', price: '6,000 VNĐ', screen: 'd' },
    { id: '139', name: 'Tuyến số 139', route: 'Bến xe Miền Tây - Phú Xuân', time: '05:30 - 19:10', price: '6,000 VNĐ', screen: 'e' },
    { id: '140', name: 'Tuyến số 140', route: 'Bến xe buýt Sài Gòn - Ba Tơ', time: '05:00 - 19:00', price: '6,000 VNĐ', screen: 'f' },
  ];

  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chọn tuyến xe Bus</Text>
        <TouchableOpacity style={styles.iconHeart}>
          <Image source={require('../Busapp/Image/Tim.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm địa điểm ..."
      />
      <FlatList
        data={busRoutes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.routeContainer} onPress={() => handlePress(item.screen)}>
            <Image source={require('../Busapp/Image/Xe.png')} style={styles.icon} />
            <View style={styles.routeInfo}>
              <Text style={styles.routeName}>{item.name}</Text>
              <Text style={styles.routeDetails}>{item.route}</Text>
              <Text style={styles.routeTime}>{item.time}</Text>
            </View>
            <View style={styles.routePriceContainer}>
              <Text style={styles.routePrice}>{item.price}</Text>
              <TouchableOpacity>
                <Image source={require('../Busapp/Image/Tim.png')} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#6A5ACD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  iconHeart: {
    padding: 5,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 30,
    height: 26,
    marginRight: 10,
  },
  routeInfo: {
    flex: 1,
  },
  routeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  routeDetails: {
    color: '#555',
  },
  routeTime: {
    color: '#999',
  },
  routePriceContainer: {
    alignItems: 'center',
    
  },
  routePrice: {
    color: '#333',
    fontWeight: 'bold',
    flexDirection: 'row', // Căn icon ngang
    justifyContent: 'center',
    resizeMode: 'contain', // Đảm bảo icon không bị cắt
    width: 90, // Điều chỉnh chiều rộng icon để kéo dài ra hai bên
    height: 40, // Điều chỉnh chiều cao icon để làm thấp hơn
    marginRight: 4, // Thêm khoảng cách giữa icon và nội dung khác
  },
});

export default BusRoutes;
