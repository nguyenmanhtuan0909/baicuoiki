import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header với biểu tượng và màu nền tím chiếm toàn bộ chiều rộng */}
      <View style={styles.header}>
        <Image source={require('../Busapp/Image/Iconbus.png')} style={styles.icon} />
      </View>

      {/* Phần tiêu đề */}
      <Text style={styles.title}>Đăng Nhập</Text>

      {/* Phần nhập Email */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="nguyenphuxuanthao@gmail.com"
          placeholderTextColor="#A9A9A9"
        />
      </View>

      {/* Phần nhập Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="123456789Aa"
          placeholderTextColor="#A9A9A9"
          secureTextEntry
        />
      </View>

      {/* Nút Đăng Nhập */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Trangdau')}>
        <Text style={styles.loginButtonText}>Đăng Nhập</Text>
      </TouchableOpacity>

      {/* Nút Đăng Ký */}
      <TouchableOpacity onPress={() => navigation.navigate('Dangky')}>
        <Text style={styles.registerText}>Đăng Ký</Text>
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
    paddingTop: 300, // Tạo khoảng trống để không bị che bởi header
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
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#D3D3D3',
    color: '#000000',
  },
  loginButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 20,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#6C63FF',
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: 'underline',
    left: 100,
  },
});

export default LoginScreen;
