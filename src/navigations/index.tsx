import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginNavigation} from "./login.navigation"
import { useAuth } from '../hooks/auth';
import { TabNavigation } from './tab.navigation';
export  function Navigation() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user?.token ? <TabNavigation/> : <LoginNavigation />}
    </NavigationContainer>
  );
}