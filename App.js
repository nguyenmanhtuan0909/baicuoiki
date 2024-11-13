import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from './Logo';
import Trangcho from './Trangcho';
import Dangnhap from './Dangnhap';
import Dangky from './Dangky';
import Trangdau from './Trangdau';
import Timduong from './Timduong';
import Quydao from './Quydao';
import Tuyenxe from './Tuyenxe';
import Tuyenxe110 from './Tuyenxe110';
import Tuyenxe122 from './Tuyenxe122';
import Tuyenxe126 from './Tuyenxe126';
import Caidat from './Caidat';
import Thongbao from './Thongbao';
import Capnhat from './Capnhat';
import Danhgia from './Danhgia';
import Thongtin from './Thongtin';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Logo}
          options={{ headerShown: false }}  // Ẩn tiêu đề nếu muốn
        />
         <Stack.Screen name="Trangcho" component={Trangcho} />
         <Stack.Screen name="Dangnhap" component={Dangnhap} />
         <Stack.Screen name="Dangky" component={Dangky} />
         <Stack.Screen name="Trangdau" component={Trangdau} />
         <Stack.Screen name="Timduong" component={Timduong} />
         <Stack.Screen name="Quydao" component={Quydao} />
         <Stack.Screen name="Tuyenxe" component={Tuyenxe} />
         <Stack.Screen name="Tuyenxe110" component={Tuyenxe110} />
         <Stack.Screen name="Tuyenxe122" component={Tuyenxe122} />
         <Stack.Screen name="Tuyenxe126" component={Tuyenxe126} />
         <Stack.Screen name="Caidat" component={Caidat} />
         <Stack.Screen name="Thongbao" component={Thongbao} />
         <Stack.Screen name="Capnhat" component={Capnhat} />
         <Stack.Screen name="Danhgia" component={Danhgia} />
         <Stack.Screen name="Thongtin" component={Thongtin} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}