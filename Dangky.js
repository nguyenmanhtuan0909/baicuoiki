import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header với biểu tượng và màu nền */}
      <View style={styles.header}>
        <Image source={require('../Busapp/Image/Sao.png')} style={styles.icon} />
      </View>

      {/* Phần tiêu đề */}
      <Text style={styles.title}>Đăng Ký</Text>

      {/* Các trường nhập thông tin */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Họ tên</Text>
        <TextInput style={styles.input} placeholder="Nhập họ tên" placeholderTextColor="#A9A9A9" />
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.inputContainerSmall}>
          <Text style={styles.label}>Giới tính</Text>
          <TextInput style={styles.input} placeholder="Nam/Nữ" placeholderTextColor="#A9A9A9" />
        </View>
        <View style={styles.inputContainerSmall}>
          <Text style={styles.label}>Ngày sinh</Text>
          <TextInput style={styles.input} placeholder="DD/MM/YYYY" placeholderTextColor="#A9A9A9" />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Số điện thoại</Text>
        <TextInput style={styles.input} placeholder="Nhập số điện thoại" placeholderTextColor="#A9A9A9" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Nhập email" placeholderTextColor="#A9A9A9" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Nhập mật khẩu" placeholderTextColor="#A9A9A9" secureTextEntry />
      </View>

      {/* Nút Đăng Ký */}
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.goBack()}>
      <Text style={styles.registerButtonText}>Đăng Ký</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 150,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 24,
    color: '#6C63FF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputContainerSmall: {
    width: '48%',
  },
  label: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#D3D3D3',
    color: '#000000',
  },
  registerButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 20,
    marginTop: 20,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
