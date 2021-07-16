import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Configs
import { mainNavigatorScreenOptions } from '@configs/navigators/main-navigator';

// Screens
import { MainScreen } from '@screens/Main';

const Stack = createStackNavigator();

export const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={mainNavigatorScreenOptions}>
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
