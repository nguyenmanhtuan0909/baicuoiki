import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ReviewScreen = () => {
  const navigation = useNavigation(); // Sử dụng hook useNavigation để điều hướng

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleRatingPress = (index) => {
    setRating(index);
  };

  const handleSubmit = () => {
    console.log('Đánh giá:', rating);
    console.log('Nội dung:', comment);
    // Bạn có thể thêm chức năng gửi đánh giá ở đây
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đánh giá</Text>
        <Image source={{ uri: 'https://flagcdn.com/vn.svg' }} style={styles.flag} />
      </View>

      <Image source={{ uri: 'https://example.com/bus-icon.png' }} style={styles.image} />
      <Text style={styles.title}>Bản đồ Xe Buýt</Text>

      <Text style={styles.label}>Đánh giá:</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((index) => (
          <TouchableOpacity key={index} onPress={() => handleRatingPress(index)}>
            <FontAwesome name="star" size={32} color={index <= rating ? '#FFD700' : '#ddd'} />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Nội dung:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="viết bình luận"
        value={comment}
        onChangeText={setComment}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Gửi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7A42F4',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  flag: {
    width: 24,
    height: 16,
    borderRadius: 2,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  textInput: {
    width: '100%',
    height: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#7A42F4',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReviewScreen;
