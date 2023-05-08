import React from 'react';
import { DrawerNavigationProp , createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenPerfil } from "../screens"
import { colors } from '../styles/colors';
import { Ionicons } from '@expo/vector-icons';
type DrawerParamList = {
  Perfil: undefined
  
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Perfil' >
export type DrawerTypes = {
  navigation: DrawerScreenNavigationProp
}


export function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Perfil" component={ScreenPerfil}
      />

    </Drawer.Navigator>
  )
}