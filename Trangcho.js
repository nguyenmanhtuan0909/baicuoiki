import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Giả lập thời gian tải ứng dụng, điều hướng sau 3 giây
    setTimeout(() => {
      navigation.replace('Dangnhap'); // Điều hướng sang HomeScreen sau 3 giây
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Nhóm đầu tiên */}
      <View style={styles.topSection}>
        <Image source={require('../Busapp/Image/Iconbus.png')} style={styles.smallIcon} />
        <Text style={styles.title}>-- Bus Map --</Text>
        <Text style={styles.subtitle}>Lập Trình Di Động</Text>
      </View>

      {/* Nhóm thứ hai */}
      <View style={styles.bottomSection}>
        <Image source={require('../Busapp/Image/Iconbus.png')} style={styles.largeIcon} />
        <ActivityIndicator size="large" color="#000000" style={styles.spinner} />
        <Text style={styles.loadingText}>Đang Khởi Động</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 100, // Tạo khoảng cách giữa hai nhóm
  },
  bottomSection: {
    alignItems: 'center',
  },
  smallIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  largeIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  spinner: {
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default SplashScreen;