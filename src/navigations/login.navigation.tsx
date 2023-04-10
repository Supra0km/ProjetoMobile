import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {ScreenCadastrar, ScreenLogin} from "../screens"

const Stack = createStackNavigator();

export function LoginNavigation() {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Cadastre-se" component={ScreenCadastrar} />

    </Stack.Navigator>
  );
}