/*
 *  file: App.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.2
 *  date-created: feb-12-2022
 *  last-modified: apr-01-2022
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ToastAndroid,
  Platform,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Settings from './screens/Settings';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
const Stack = createStackNavigator();

  /**
   * NavStack
   * Purpose: this function creates a stack of screen for the react-navigation to traverse through .
   *
   * Parameter(s):
   *  N/A
   *
   * Precondition(s):
   * <1> all screens in the app must be defined and exported to be accessed in this file.
   *
   * Returns: A stack navigator with customizable header and stack of screens containing the Home screen and Settings screen.
   *
   * Side effect:
   * <1> a header will be generated as per the options defined in the navigator. The first screen to be defined after the Navigator will be displayed first after the splash screen. navigation props can be used in any of the screens to navigate to the next screen. A back button pointing to the previous screen will be on the left corner of the header. Any screen which is part of the project but not explicitly defined in this function will be unreachable from all other screens which are in the navigator stack.
   */
function NavStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#6C5D9B',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'CalcBasic',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: 'Settings',
        }}
      />
    </Stack.Navigator>
  );
}


export default function App() {
      /**
     * NavigationContainer
     * Manages app state with reference to stack navigation
     * Prop(s):
     * N/A
     * 
     * StatusBar
     * Value false indicates that the status bar must be visible when the app is open
     * Prop(s):
     * N/A
     * 
     * NavStack
     * Creates the navigation stack defined in the function
     * Prop(s):
     * N/A
     * 
     */
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar hidden={false} />
        <NavStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
