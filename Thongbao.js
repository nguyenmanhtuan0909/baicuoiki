import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const ThngBo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Thông báo</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.notificationBox}>
          <Image
            source={require('../Busapp/Image/image 24.png')}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Khôi phục hd tuyến xe 15</Text>
            <Text style={styles.description}>
              Từ 21/05 TP. Hà Nội khôi phục lại hoạt động của tuyến xe bus số 15
              nút giao ngã tư sở - khuất duy tiến
              {'\n'}07/08/2003 - 20:08
            </Text>
          </View>
        </View>

        <View style={styles.notificationBox}>
          <Image
            source={require('../Busapp/Image/image 23.png')}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Xe bus hoạt động dịch lễ</Text>
            <Text style={styles.description}>
              Thông báo kế hoạch nghỉ lễ hoạt động của tuyến xe bus dịp lễ dỗ tổ
              hùng vương
              {'\n'}08/04/2023 15:05
            </Text>
          </View>
        </View>

        <View style={styles.notificationBox}>
          <Image
            source={require('../Busapp/Image/image 25.png')}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Tạm điều chỉnh lộ trình</Text>
            <Text style={styles.description}>
              Ngày 12/04 điều chỉnh lộ trình các tuyến xe bus qua khu vực đại học
              công nghệ giao thông vận tải
              {'\n'}12/04/2003 - 20:08
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#6c63ff',
    height: 63,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 8,
  },
  headerText: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    marginLeft: 16,
  },
  content: {
    padding: 16,
  },
  notificationBox: {
    marginBottom: 24,
    flexDirection: 'row', // Để ảnh và văn bản hiển thị trên cùng một dòng
    alignItems: 'center', // Căn giữa theo chiều dọc
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 8, // Khoảng cách giữa ảnh và văn bản
  },
  textContainer: {
    flex: 1, // Chiếm đầy đủ chiều rộng còn lại
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  description: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: '#6c63ff',
    fontSize: 14,
    marginTop: 4,
  },
});

export default ThngBo;
