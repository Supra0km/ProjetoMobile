import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenPerfil, ScreenCamera, ScreenLocation } from "../screens"
import { colors } from '../styles/colors';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
type TabParamList = {
  Perfil: undefined
  Camera: undefined
  Location: undefined
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil' >
export type TabTypes = {
  navigation: TabScreenNavigationProp
}


export function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.roxo,
        tabBarActiveTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.roxo
        },
          headerTintColor: colors.white
      }}
    >

      <Tab.Screen name="Perfil" component={ScreenPerfil}
       options={{
        tabBarIcon: () => (
          <Ionicons name='person' color={colors.black} size={24} />
        )
      }}
      />
      <Tab.Screen name="Camera" component={ScreenCamera}
       options={{
        tabBarIcon: () => (
          <Entypo name="camera" size={24} color={colors.black}/>
        )
       }}
      />
      <Tab.Screen name='Location' component={ScreenLocation}
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-location" size={24} color={Colors.black} />
          )
        }}
      />
    </Tab.Navigator>
  )
}