import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home} from '../screens/Home';
import {TempScreen} from '../screens/TempScreen';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppTab() {
  return (
    <Navigator>
      <Screen name="HomeTab" component={Home} />
      <Screen name="TempScreen1" component={TempScreen} />
      <Screen name="TempScreen2" component={TempScreen} />
    </Navigator>
  );
}
