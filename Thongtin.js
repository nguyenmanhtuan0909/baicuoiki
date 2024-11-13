import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NotificationDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chi Tiết Thông Báo</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Xe Buýt hoạt động dịp lễ</Text>
        <Text style={styles.date}>12/09/2023 08:33</Text>
        <Text style={styles.bodyText}>
          Để đảm bảo phục vụ vận chuyển hành khách trong dịp Lễ Giỗ Tổ Hùng Vương, Ngày Giải phóng miền Nam thống nhất Đất nước (30/4) và Ngày Quốc tế Lao Động (01/5) năm 2022 sắp đến được thuận lợi, Cơ quan quản lý xe buýt TP.HCM đã phối hợp với các đơn vị xây dựng kế hoạch phục vụ cụ thể như sau:
        </Text>
        
        <Text style={styles.sectionTitle}>Thời gian phục vụ:</Text>
        <Text style={styles.bodyText}>
          - Lễ Giỗ Tổ Hùng Vương: Từ ngày 09 tháng 4 năm 2022 đến hết ngày 11 tháng 4 năm 2022.
          {'\n'}- Ngày Giải phóng miền Nam thống nhất Đất nước (30/4) và Ngày Quốc tế Lao động (01/5): Từ ngày 30 tháng 4 năm 2022 đến hết ngày 03 tháng 5 năm 2022.
        </Text>
        
        <Text style={styles.sectionTitle}>Các tuyến ngừng hoạt động trong các dịp Lễ:</Text>
        <Text style={styles.bodyText}>
          - Từ ngày 09/4/2022 đến hết ngày 11/4/2022 ngừng hoạt động tuyến 50 (Đại học Bách Khoa - Đại học Quốc Gia).
          {'\n'}- Từ ngày 30/4/2022 đến hết ngày 03/5/2022 ngừng hoạt động tuyến 52 (Bến Thành - ĐH Quốc Tế).
          {'\n'}- Từ ngày 30/4/2022 đến hết ngày 03/5/2022 ngừng hoạt động tuyến 69 (Bến xe buýt Sài Gòn - Đại học Nông Lâm).
        </Text>

        <Text style={styles.bodyText}>
          Riêng tuyến xe buýt số 69 (Bến xe buýt Sài Gòn - Đại học Nông Lâm) sẽ hoạt động bình thường trong các ngày lễ.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7A42F4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  bodyText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 5,
  },
});

export default NotificationDetailScreen;
