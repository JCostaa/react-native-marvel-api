import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './Pages/Home';
import Logo from './components/Logo';
import DetailScreen from './Pages/Detail';
import WebViewScreen from './Pages/WebView';

const Stack = createStackNavigator();

export default function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: <Logo />,
          headerStyle: {
            borderBottomWidth: 0,
          },
          headerTitleAlign: 'center',
          headerTintColor: '#e71a24',
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="ViewWiki" component={WebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
