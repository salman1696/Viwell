import React from 'react';
import { MainFlow, RewardDetail } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainFlow" component={MainFlow} />
      <Stack.Screen name="RewardDetail" component={RewardDetail} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
